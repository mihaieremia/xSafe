import { useContext, useEffect, useMemo } from 'react';
import {
  Address,
  BigUIntValue,
  BytesValue,
  TokenPayment,
} from '@multiversx/sdk-core/out';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormikProps, useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { TestContext } from 'yup';
import MultisigDetailsContext from 'src/context/MultisigDetailsContext';
import { FormikInputField } from 'src/helpers/formikFields';
import { MultisigSmartContractCall } from 'src/types/MultisigSmartContractCall';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useTheme } from 'styled-components';
import { Box, TextField, useMediaQuery } from '@mui/material';
import { InputsContainer, MainButton, RemoveItemsButton } from 'src/components/Theme/StyledComponents';
import { Text } from 'src/components/StyledComponents/StyledComponents';
import * as Styled from './styled';

interface ProposeSmartContractCallType {
  handleChange: (proposal: MultisigSmartContractCall) => void;
  setSubmitDisabled: (value: boolean) => void;
}

function validateRecipient(value?: string) {
  try {
    const _address = new Address(value);
    return true;
  } catch (err) {
    return false;
  }
}

function validateArgument(value?: string[], testContext?: TestContext) {
  try {
    if (value == null) {
      return true;
    }
    value.map((arg) => BytesValue.fromHex(arg));
    return true;
  } catch (err) {
    return (
      testContext?.createError({
        message: 'Invalid arguments',
      }) ?? false
    );
  }
}

interface IFormValues {
  receiver: string,
  amount: string,
  functionName: string,
  args: string[],
}

const ProposeSmartContractCall = ({
  handleChange,
  setSubmitDisabled,
}: ProposeSmartContractCallType) => {
  const theme: any = useTheme();
  const { multisigBalance } = useContext(MultisigDetailsContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();

  let formik: FormikProps<IFormValues>;

  function validateAmount(value?: string, testContext?: TestContext) {
    if (value == null) {
      return true;
    }
    const validatedAmount = Number(value);
    if (Number.isNaN(validatedAmount)) {
      return (
        testContext?.createError({
          message: 'Invalid amount',
        }) ?? false
      );
    }
    if (validatedAmount < 0) {
      formik.setFieldValue('amount', 0);
    }
    if (validatedAmount > Number(multisigBalance.toRationalNumber())) {
      return (
        testContext?.createError({
          message:
            'There is not enough money in the organization for this transaction',
        }) ?? false
      );
    }
    return true;
  }

  const validationSchema = Yup.object().shape({
    receiver: Yup.string()
      .min(2, 'Too Short!')
      .max(500, 'Too Long!')
      .required('Required')
      .test(validateRecipient),
    amount: Yup.string()
      .required('Required')
      .transform((value) => value.replace(',', '.'))
      .test(validateAmount),
    functionName: Yup.string(),
    args: Yup.array().test(validateArgument),
  });

  formik = useFormik<IFormValues>({
    initialValues: {
      receiver: '',
      amount: 0,
      functionName: '',
      args: [],
    },
    validationSchema,
    validateOnChange: true,
    validateOnMount: true,
  } as any);

  useEffect(() => {
    setSubmitDisabled(true);
  }, []);

  const denominatedValue = useMemo(
    () =>
      TokenPayment.egldFromBigInteger(multisigBalance.toString()).toRationalNumber(),
    [multisigBalance],
  );

  const { touched, errors, values } = formik;
  const { amount, receiver, functionName, args } = values;
  const getProposal = (): MultisigSmartContractCall | null => {
    try {
      const addressParam = new Address(formik.values.receiver);

      const amountNumeric = Number(formik.values.amount);
      if (Number.isNaN(amountNumeric)) {
        return null;
      }

      const amountParam = new BigUIntValue(
        TokenPayment.egldFromAmount(amountNumeric).valueOf(),
      );

      const argsParams = args.map((arg) => BytesValue.fromHex(arg));

      return new MultisigSmartContractCall(
        addressParam,
        amountParam,
        functionName,
        argsParams,
      );
    } catch (err) {
      return null;
    }
  };

  function refreshProposal() {
    if (Object.keys(formik.errors).length > 0) {
      return;
    }
    const proposal = getProposal();
    if (proposal !== null) {
      handleChange(proposal);
    }
  }

  useEffect(() => {
    refreshProposal();
  }, [formik.values, formik.errors]);

  useEffect(() => {
    const hasErrors = Object.keys(formik.errors).length > 0;
    setSubmitDisabled(hasErrors);
  }, [formik.errors]);

  const addNewArgsField = () => {
    const nextArgNumber = args.length;
    formik.setFieldValue(`args[${nextArgNumber}]`, '');
  };

  const removeArg = (removeIdx: number) => {
    formik.setFieldValue(
      'args',
      args.filter((_, index: number) => index !== removeIdx),
    );
  };

  const receiverError = touched.receiver && errors.receiver;
  const amountError = touched.amount && errors.amount;
  const argsError =
    Array.isArray(touched?.args) &&
    touched.args.length === args.length &&
    touched.args.every((arg) => arg) &&
    errors.args;

  const maxWidth600 = useMediaQuery('(max-width:600px)');

  return (
    <Styled.SelectProposalTypesModalContainer>
      <FormikInputField
        label={t('Send to')}
        name="receiver"
        value={receiver}
        error={receiverError}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        className={receiverError ? 'isError' : ''}
      />
      <InputsContainer
        className={amountError != null ? 'hasAvailableAmount invalid' : 'hasAvailableAmount'}
      >
        <Form.Control
          id="amount"
          name="amount"
          isInvalid={amountError != null}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={amount}
        />

        <label htmlFor="amount">{t('Amount') as string}</label>

        <span className="errorMessage">{amountError}</span>

        <Text
          fontSize={13}
          variant="subtitle2"
          className="availableAmount"
        >{`${t('Available')}: ${denominatedValue} EGLD`}
        </Text>
      </InputsContainer>
      <Box>
        <TextField
          variant="outlined"
          label={t('Function name (optional)') as string}
          id={functionName}
          name="functionName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={functionName}
          sx={{
            width: '100%',
            m: '4px 0 20px',
            label: {
              marginBottom: 0,
              fontSize: '15px',
              left: '-1px',
              color: theme.palette.text.secondary,
            },
            '& .MuiOutlinedInput-input': {
              color: theme.palette.text.primary,
            },
            '& .MuiOutlinedInput-root fieldset': {
              transition: 'all .3s linear',
              borderColor: theme.palette.borders.secondary,
            },
            '&:hover': {
              '& .MuiOutlinedInput-root fieldset': {
                borderColor: theme.palette.borders.active,
              },
            },
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
              transition: 'all .3s linear',
              borderColor: theme.palette.borders.active,
              borderWidth: '1px',
            },
            '& label.MuiInputLabel-root.Mui-focused': {
              color: theme.palette.borders.active,
            },
          }}
        />
      </Box>
      {functionName?.length > 0 && (
        <Box>
          {args.map((arg, idx) => (
            <Box key={arg} display={'flex'}>
              <InputsContainer
                width={'100%'}
                className={argsError ? 'invalid' : ''}
                margin={maxWidth600 ? '0 0 16px !important' : ''}
              >
                <Form.Control
                  id={`args[${idx}]`}
                  name={`args[${idx}]`}
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={arg}
                  isInvalid={argsError != null}
                />

                <label htmlFor={`args[${idx}]`}>
                  {`${t('Argument')} ${idx + 1}`}
                </label>

                <span className="errorMessage">{argsError}</span>

              </InputsContainer>
              <RemoveItemsButton
                onClick={() => removeArg(idx)}
                sx={{ alignSelf: 'flex-start', mt: maxWidth600 ? 0 : '10px', ml: '7px' }}
              >
                <FontAwesomeIcon className="mx-2" icon={faMinus as IconProp} />
              </RemoveItemsButton>
            </Box>
          ))}
          <MainButton sx={{ width: '100%', mb: '10px !important', mt: '5px' }} onClick={addNewArgsField}>
            Add argument
          </MainButton>
        </Box>
      )}

    </Styled.SelectProposalTypesModalContainer>
  );
};

export default ProposeSmartContractCall;

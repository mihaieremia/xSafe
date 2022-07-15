import { useEffect, useMemo, useState } from 'react';
import { operations } from '@elrondnetwork/dapp-utils';
import { Address } from '@elrondnetwork/erdjs/out';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FormikProps, useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { FormikInputField } from 'src/helpers/formikFields';
import { tokenTableRowsSelector } from 'src/redux/selectors/accountSelector';
import { selectedTokenToSendSelector } from 'src/redux/selectors/modalsSelector';
import { denomination } from 'src/config';
import { MultisigSendToken } from 'src/types/MultisigSendToken';
import { TokenTableRowItem } from 'src/pages/Organization/types';
import { TestContext } from 'yup';
import TokenPresentationWithPrice from 'src/components/Utils/TokenPresentationWithPrice';
import { StateType } from 'src/redux/slices/accountSlice';

interface ProposeSendTokenType {
  handleChange: (proposal: MultisigSendToken) => void;
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

const DECIMAL_POINTS = 3;

export type TokenPresentationProps = {
    identifier: string;
};

interface IFormValues {
  address: string;
  identifier: string;
  amount: string;
}

const ProposeSendToken = ({
  handleChange,
  setSubmitDisabled,
}: ProposeSendTokenType) => {
  const { t } = useTranslation();
  let formik: FormikProps<IFormValues>;

  const selectedToken = useSelector(selectedTokenToSendSelector);
  const [identifier, setIdentifier] = useState(selectedToken.identifier);
  const tokenTableRows = useSelector<StateType, TokenTableRowItem[]>(tokenTableRowsSelector);

  const availableTokensWithBalances = useMemo(
    () =>
      tokenTableRows?.map((token: TokenTableRowItem) => ({
        identifier: token.identifier,
        balance: operations.denominate({
          input: token?.balanceDetails?.amount as string,
          denomination: token?.balanceDetails?.decimals as number,
          decimals: token?.balanceDetails?.decimals as number,
          showLastNonZeroDecimal: true,
          addCommas: false,
        }),
      })),
    [tokenTableRows],
  );

  const selectedTokenBalance = useMemo(
    () => availableTokensWithBalances.find(
      (token: TokenTableRowItem) => token?.identifier === identifier,
    )?.balance as string,
    [availableTokensWithBalances, identifier],
  );

  const validateAmount = (value?: string, testContext?: TestContext) => {
    if (value == null) {
      return true;
    }
    const newAmount = Number(value);
    if (Number.isNaN(newAmount)) {
      setSubmitDisabled(true);
      return (
        testContext?.createError({
          message: 'Invalid amount',
        }) ?? false
      );
    }
    if (newAmount < 0) {
      formik.setFieldValue('amount', 0);
    }
    if (newAmount > Number(selectedTokenBalance)) {
      setSubmitDisabled(true);
      return (
        testContext?.createError({
          message:
            'There are not enough money in the organization for this transaction',
        }) ?? false
      );
    }

    if (newAmount === 0) {
      setSubmitDisabled(true);
      return (
        testContext?.createError({
          message: 'The amount should be greater than 0',
        }) ?? false
      );
    }

    setSubmitDisabled(!formik.isValid || !formik.dirty);
    return true;
  };

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        address: Yup.string()
          .min(2, 'Too Short!')
          .max(500, 'Too Long!')
          .required('Required')
          .test(validateRecipient),
        amount: Yup.string()
          .required('Required')
          .transform((value) => value.replace(',', '.'))
          .test(validateAmount),
      }),
    [validateAmount, validateRecipient],
  );

  formik = useFormik({
    initialValues: {
      address: '',
      amount: 0,
    },
    validationSchema,
    validateOnChange: true,
    validateOnMount: true,
  } as any);

  const { touched, errors, values } = formik;
  const { amount, address } = values;

  const getProposal = (): MultisigSendToken | null => {
    try {
      const nominatedAmount = operations.nominate(
        amount.toString(),
        denomination,
      );
      const amountNumeric = Number(nominatedAmount);
      if (Number.isNaN(amountNumeric)) {
        return null;
      }
      const parsedAddress = new Address(address);

      return new MultisigSendToken(parsedAddress, identifier, amountNumeric);
    } catch (err) {
      return null;
    }
  };

  const refreshProposal = () => {
    setTimeout(() => {
      const proposal = getProposal();

      if (proposal !== null) {
        handleChange(proposal);
      }
    }, 100);
  };

  const amountError = touched.amount && errors.amount;
  const addressError = touched.address && errors.address;

  const onIdentifierChanged = (event: SelectChangeEvent) => {
    setIdentifier(event.target.value as string);
    formik.setFieldValue('amount', 0);
  };

  useEffect(() => {
    setSubmitDisabled(!(formik.isValid && formik.dirty));
  }, [amount, address]);

  useEffect(() => {
    refreshProposal();
  }, [address, identifier, amount]);

  return (
    <div>
      <div className="modal-control-container mb-4">
        <FormikInputField
          label={t('Send to')}
          name="address"
          value={address}
          error={addressError}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
      </div>
      <div className="modal-control-container mb-4">
        <InputLabel id="demo-simple-select-label">Identifier</InputLabel>
        <Select
          value={identifier}
          fullWidth
          label="Identifier"
          size="small"
          onChange={onIdentifierChanged}
          className="mb-2"
        >
          {tokenTableRows?.map((token: TokenTableRowItem) => (
            <MenuItem
              key={token.identifier}
              value={token.identifier}
            >
              <TokenPresentationWithPrice
                identifier={token.identifier as string}
              />
            </MenuItem>
          ))}
        </Select>
        <div>
          Balance:
          {` ${parseFloat(Number(
            availableTokensWithBalances.find(
              (token: TokenTableRowItem) => token.identifier === identifier,
            )?.balance,
          ).toFixed(DECIMAL_POINTS))}`}
        </div>
      </div>

      <div className="modal-control-container">
        <div className="input-wrapper">
          <label htmlFor={amount}>
            {`${t('Amount')}:`}
          </label>
          <Form.Control
            id={amount}
            name="amount"
            isInvalid={amountError != null}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={amount}
          />

          {amountError != null && (
            <Form.Control.Feedback type="invalid">
              {amountError}
            </Form.Control.Feedback>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProposeSendToken;

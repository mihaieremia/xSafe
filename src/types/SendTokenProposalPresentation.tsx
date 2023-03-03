import { Address, TokenPayment } from '@multiversx/sdk-core/out';
import { Box, Grid, useMediaQuery } from '@mui/material';
import SouthIcon from '@mui/icons-material/South';
import MemberPresentationWithPhoto from 'src/pages/Organization/MemberPresentationWithPhoto';
import BigNumber from '@multiversx/sdk-core/node_modules/bignumber.js';
import TokenPresentationWithPrice from 'src/components/Utils/TokenPresentationWithPrice';
import { Text } from 'src/components/StyledComponents/StyledComponents';
import { StyledStakingProvider } from 'src/components/StyledComponents/staking';
import { StateType } from '@multiversx/sdk-dapp/reduxStore/slices';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { TokenTableRowItem } from 'src/pages/Organization/types';
import { tokenTableRowsSelector } from 'src/redux/selectors/accountSelector';

interface ISendTokenProposalPresentationProps {
  address: Address;
  amount: BigNumber;
  identifier: string;
  title: string;
}

const SendTokenProposalPresentation = (
  { address, amount, identifier, title }: ISendTokenProposalPresentationProps) => {
  const tokenTableRows = useSelector<StateType, TokenTableRowItem[]>(tokenTableRowsSelector);
  const selectedTokenDetails = useMemo(
    () => tokenTableRows?.find(
      (token: TokenTableRowItem) => token?.identifier === identifier,
    ),
    [identifier, tokenTableRows],
  );
  const proposalAmount = useMemo(() => Number(
    identifier !== 'EGLD'
      ? TokenPayment.fungibleFromBigInteger(
        identifier,
        amount,
        selectedTokenDetails?.value?.decimals,
      ).toRationalNumber()
      : TokenPayment.egldFromBigInteger(amount).toRationalNumber(),
  ).toLocaleString() ?? '0',
  [amount, identifier, selectedTokenDetails?.value?.decimals]);

  const maxWidth600 = useMediaQuery('@media(max-width:600px)');
  const maxWidth500 = useMediaQuery('@media(max-width:500px)');
  return (
    <Box display="flex" flexDirection="column" alignItems="start">
      <Text style={{ fontSize: maxWidth600 ? 17 : '1.5rem' }}>
        <strong>{title}</strong>
      </Text>
      <StyledStakingProvider
        sx={{
          padding: '6px',
          my: 1,
        }}
      >
        <Box
          marginRight={2}
          paddingRight={2}
          borderRight={'1px solid #DFDFE8'}
        >
          <TokenPresentationWithPrice withTokenAmount={false} withTokenValue={false} identifier={identifier} />
        </Box>
        <Box display={'flex'} flexDirection={'column'}>
          <Text fontWeight={500} marginRight={1}> Amount: </Text>
          {proposalAmount}{' '}
        </Box>
      </StyledStakingProvider>
      <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <SouthIcon />
        <Text mx={1}>Send to</Text>
        <SouthIcon />
      </Grid>
      <StyledStakingProvider sx={{
        padding: '6px',
        my: 1,
      }}
      >
        <MemberPresentationWithPhoto
          memberAddress={address}
          // eslint-disable-next-line no-nested-ternary
          charactersLeftAfterTruncation={maxWidth500 ? 8 : maxWidth600 ? 16 : 20}
        />
      </StyledStakingProvider>
    </Box>
  );
};

export default SendTokenProposalPresentation;

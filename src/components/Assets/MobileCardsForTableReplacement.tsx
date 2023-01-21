import { Box, Typography } from '@mui/material';
import { TokenPayment } from '@multiversx/sdk-core/out';
import { ReactComponent as MultiversXLogoSymbol } from 'src/assets/img/multiversx-symbol.svg';
import * as Styled from '../../pages/Organization/styled';
import { Text } from '../StyledComponents/StyledComponents';

export const SQUARE_IMAGE_WIDTH = 30;
export const SQUARE_SMALL_IMAGE_WIDTH = 20;

const MobileCardsForTableReplacement = ({ items, actionButton }:
  { items: any, actionButton: JSX.Element[] }) => items.map((item: any) => (
    <Styled.MobileCardOfTokens key={item.id + item.balanceDetails.identifier}>
      <Styled.TokenDetailsBox>
        <Styled.CategoryName>
          <Typography component="span">Assets</Typography>
          <Box display="flex" gap={1}>
            {item.balanceDetails.identifier !== 'EGLD' && (
              <img
                width={SQUARE_SMALL_IMAGE_WIDTH}
                height={SQUARE_SMALL_IMAGE_WIDTH}
                src={item.presentation.photoUrl}
                alt={item.presentation.tokenIdentifier}
              />
            )}
            {item.balanceDetails.identifier === 'EGLD' && (
            <MultiversXLogoSymbol
              width={SQUARE_SMALL_IMAGE_WIDTH}
              height={SQUARE_SMALL_IMAGE_WIDTH}
            />
            )}
            <Text fontWeight={700}>
              {item.balanceDetails.identifier}
            </Text>
          </Box>
        </Styled.CategoryName>
        <Styled.CategoryName>
          <Typography component="span">Balance</Typography>
          <Typography component="h6" className="mb-0 font-weight-normal">
            {
              Number(TokenPayment.egldFromBigInteger(item.balanceDetails.amount).toRationalNumber()).toLocaleString()
            }
            {' '} ${item.balanceDetails.identifier}
          </Typography>
        </Styled.CategoryName>
        <Styled.CategoryName>
          <Typography component="span">Value</Typography>
          <Typography component="h6" className="mb-0 font-weight-normal">
            {Number(Number(
              TokenPayment
                .egldFromBigInteger(item.balanceDetails.amount)
                .toRationalNumber(),
            ) * item.value.tokenPrice).toLocaleString()} USD
          </Typography>
        </Styled.CategoryName>
      </Styled.TokenDetailsBox>
      <Styled.ActionButtonsBox>{actionButton}</Styled.ActionButtonsBox>
    </Styled.MobileCardOfTokens>
));

export default MobileCardsForTableReplacement;

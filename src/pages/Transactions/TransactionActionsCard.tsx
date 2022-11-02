/* eslint-disable react/no-unused-prop-types */
import { Address } from '@elrondnetwork/erdjs/out';
import {
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseIcon from '@mui/icons-material/Close';
import { gasLimit as defaultGasLimit } from 'src/config';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CheckIcon from '@mui/icons-material/Check';
import {
  mutateSign,
  mutateUnsign,
  mutateDiscardAction,
  mutatePerformAction,
} from 'src/contracts/MultisigContract';
import { MultisigActionDetailed } from 'src/types/MultisigActionDetailed';
import { DiscardActionButton, PerformActionButton, Text } from 'src/components/StyledComponents/StyledComponents';
import { gasLimits } from 'src/components/PerformActionModal';
import useTransactionPermissions from './useTransactionPermissions';
import { useOrganizationInfoContext } from '../Organization/OrganizationInfoContextProvider';

export interface TransactionActionsCardType {
  type: number;
  actionId?: number;
  tooltip?: string;
  title?: string;
  value?: string;
  canSign?: boolean;
  canUnsign?: boolean;
  canPerformAction?: boolean;
  canDiscardAction?: boolean;
  data?: string;
  signers: Address[];
  boardMembers?: Address[];
  action: MultisigActionDetailed;
}
function TransactionActionsCard({
  type = 0,
  actionId = 0,
  action,
}: TransactionActionsCardType) {
  const { t } = useTranslation();
  const { isInReadOnlyMode } = useOrganizationInfoContext();
  const { canUnsign, canPerformAction, canSign, canDiscardAction } =
    useTransactionPermissions(action);
  const sign = () => {
    mutateSign(actionId);
  };
  const unsign = () => {
    mutateUnsign(actionId);
  };
  const performAction = () => {
    const gasLimit = type != null
      ? gasLimits[type as keyof typeof gasLimits] ?? defaultGasLimit
      : defaultGasLimit;
    mutatePerformAction(actionId, gasLimit);
  };
  const discardAction = () => {
    mutateDiscardAction(actionId);
  };

  if (isInReadOnlyMode) {
    return <Text>Actions are not allowed in Read-Only Mode.</Text>;
  }

  if (!canSign && !canUnsign && !canPerformAction && !canDiscardAction) {
    return <Text>You are not allowed to make changes on this action.</Text>;
  }

  return (
    <>
      <Typography variant="h6" color="black">
        <Text fontSize={17}><strong>Available Actions</strong></Text>
      </Typography>
      <div className="text-black py-3">
        <div className="d-flex">
          <div className="d-flex btns action-btns">
            {canSign && (
              <button onClick={sign} className="btn action sign btn--approve">
                <FontAwesomeIcon icon={faThumbsUp} />
                <span>{t('Approve') as string} </span>
              </button>
            )}
            {canUnsign && (
            <DiscardActionButton size="large" onClick={unsign} startIcon={<CloseIcon />}>
              {t('Discard') as string}
            </DiscardActionButton>
            )}
            {canPerformAction && (
              <PerformActionButton
                size="large"
                onClick={performAction}
                startIcon={<CheckIcon />}
              >
                {t('Perform') as string}
              </PerformActionButton>
            )}
            {canDiscardAction && (
              <DiscardActionButton size="large" onClick={discardAction} startIcon={<CloseIcon />}>
                {t('Discard') as string}
              </DiscardActionButton>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default TransactionActionsCard;

import { TokenPayment } from '@multiversx/sdk-core';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  OrganizationToken,
  TokenTableRowItem,
} from 'src/pages/Organization/types';
import { IdentityWithColumns } from 'src/types/staking';
import { logoutAction } from '../commonActions';

export interface StateType {
  address: string;
  nonce: number;
  balance: string;
  rootHash: string;
  txCount: number;
  username: string;
  shard: number;
  tokenTableRows: TokenTableRowItem[];
  organizationTokens: OrganizationToken[];
  activeDelegationsRows: IdentityWithColumns[];
  isMultiWalletMode: boolean;
  isInReadOnlyMode: boolean;
  multisigBalance: any;
  totalUsdValue: number;
}

const initialState: StateType = {
  address: '',
  nonce: 0,
  balance: '',
  rootHash: '',
  txCount: 0,
  username: '',
  shard: 0,
  tokenTableRows: [],
  organizationTokens: [],
  multisigBalance: TokenPayment.egldFromAmount(0),
  activeDelegationsRows: [],
  isMultiWalletMode: false,
  isInReadOnlyMode: true,
  totalUsdValue: 0,
};

export const accountGeneralInfoSlice = createSlice({
  name: 'accountGeneralInfoSlice',
  initialState,
  reducers: {
    setAccountData(state: StateType, action: PayloadAction<StateType>) {
      return {
        ...state,
        ...action.payload,
      };
    },
    setTotalUsdBalance(state: StateType, action: PayloadAction<number>) {
      return {
        ...state,
        totalUsdValue: action.payload,
      };
    },
    setTokenTableRows(
      state: StateType,
      action: PayloadAction<TokenTableRowItem[]>,
    ) {
      return {
        ...state,
        tokenTableRows: action.payload,
      };
    },
    setOrganizationTokens(
      state: StateType,
      action: PayloadAction<OrganizationToken[]>,
    ) {
      return {
        ...state,
        organizationTokens: action.payload,
      };
    },
    setMultisigBalance(state: StateType, action: PayloadAction<string>) {
      return {
        ...state,
        multisigBalance: action.payload,
      };
    },
    setActiveDelegationRows(
      state: StateType,
      action: PayloadAction<IdentityWithColumns[]>,
    ) {
      return {
        ...state,
        activeDelegationsRows: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => initialState);
  },
});

export const {
  setAccountData,
  setTotalUsdBalance,
  setTokenTableRows,
  setMultisigBalance,
  setOrganizationTokens,
  setActiveDelegationRows,
} = accountGeneralInfoSlice.actions;

export default accountGeneralInfoSlice.reducer;

import { Button, Typography, Box, Select } from '@mui/material';
import styled from 'styled-components';

export const MainButton = styled(Button)`
  color: ${(props) => props.theme.palette.primary.main};
  border: 1px solid
    ${(props) => props.theme.palette.primary.main};
  background-color: ${(props) => props.theme.palette.background.main};
  box-shadow: 0px 0px 8px
    ${(props) => props.theme.shadows.main};
  text-transform: capitalize;
  font-weight: ${(props) => props.theme.font.weight.lg};
  padding:
    ${(props) => props.theme.padding.value.sm}
    ${(props) => props.theme.padding.value.lg}
    ${(props) => props.theme.padding.value.xs};
  &.nftHover {
    transform: translateY(50px);
    transition: transform .2s linear;
  }
`;

export const NewTransactionButton = styled(MainButton)`
  font-size: 15px;
  padding:
      ${(props) => props.theme.padding.value.md}
      25px
      ${(props) => props.theme.padding.value.sm};
  font-weight: ${(props) => props.theme.font.weight.md};
`;

export const ChangeStepButton = styled(MainButton)`
  font-size: 15px;
  padding:
      ${(props) => props.theme.padding.value.xs}
      auto;
  font-weight: ${(props) => props.theme.font.weight.md};
  width: 100%;
  box-shadow: none;
`;

export const FinalStepActionButton = styled(ChangeStepButton)`
  color: ${(props) => props.theme.palette.background.default};
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  background-color: ${(props) => props.theme.palette.primary.main};
  &:hover  {
    box-shadow: 0px 0px 8px ${(props) => props.theme.shadows.main};
    color: ${(props) => props.theme.palette.background.default};
    border: 1px solid ${(props) => props.theme.palette.primary.main};
    background-color: ${(props) => props.theme.palette.primary.main};
  }`;

export const NewTranzationButton = styled(MainButton)`
  font-size: 15px;
  padding:
      ${(props) => props.theme.padding.value.md}
      25px
      ${(props) => props.theme.padding.value.sm};
  font-weight: ${(props) => props.theme.font.weight.md};
`;

export const AssetActionButton = styled(MainButton)`
  padding: 1px ${(props) => props.theme.padding.value.lg} 0 0;
  opacity: 0;
  transition: all .3s;
`;

export const MainSelect = styled(Select)`
  color: ${(props) => props.theme.palette.primary.main};
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  background-color: ${(props) => props.theme.palette.background.main};
  box-shadow: 0px 0px 8px ${(props) => props.theme.shadows.main};
  border-radius: 4px;
  padding: 0.25rem 0.75rem;
`;

export const TypographyBold = styled(Typography)`
  font-weight: ${(props) => props.theme.typography.bold};
`;

export const Main = styled.main`
  background-color: ${(props) => props.theme.palette.background.default};
`;

export const AssetValue = styled(Box)`
  font-size: 13px;
  color: ${(props) => props.theme.palette.black.main};
  padding: 0;
  margin: 0px;
`;

export const AccountButton = styled.div`
  &:hover ${Button} {
    background-color: red;
  }
`;
<<<<<<< HEAD

export const InputsContainer = styled(Box)`
  margin: .67rem 0 1.93rem;
  position: relative;
  background-color: transparent;
  &:focus-within {
    li, div.MuiOutlinedInput-root {
      height: 58px;
      border: solid 2px ${(props) => props.theme.palette.primary.main} !important;
    }
  };
  &:hover {
    input.form-control {
      border-color: black;
    }
    li {
      border-color: black;
    }
    div.MuiOutlinedInput-root {
      border-color: black;
    }
  };
  & div.MuiOutlinedInput-root.Mui-focused {
    height: 56px;
    border: solid 1px rgba(76, 47, 252, 0.23) !important;
  }
  & label {
    position: absolute;
    padding: 0 3px;
    top: -10px;
    left: 10px;
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 12px;
    background-color: #ffff;
  };
  & input.form-control.is-invalid ~ label {
    color: #dc3545;
  }
  & input.form-control {
    width: 100%;
    height: auto;
    padding: 16.5px 14px;
    background-color: transparent;
    border: solid 1px rgba(76, 47, 252, 0.23);
    border-radius: .3rem;
    transition: border-color 0s;
  };
  & input.form-control.is-invalid {
    background: none;
    border: solid 1px #dc3545;
  }
  & input.form-control.is-invalid:focus {
    background: none;
    border: solid 2px #dc3545;
  }
  & input.form-control.is-invalid ~ li,
    input.form-control.is-invalid ~ div.MuiOutlinedInput-root {
    border-color: #dc3545;
  }
  & input.form-control.is-invalid:focus ~ li,
    input.form-control.is-invalid:focus ~ div.MuiOutlinedInput-root {
    border: solid 2px #dc3545 !important;
  }
  & input.form-control:focus {
    outline: none;
    border: solid 2px ${(props) => props.theme.palette.primary.main};
    box-shadow: none;
  };
  & span {
    position: absolute;
    bottom: -17px;
    left: 4px;
    display: table;
    font-size: 12px;
    color: grey;
  };
  & li {
    position: absolute;
    height: 56px;
    top: 0;
    right: 0;
    border: solid 1px rgba(76, 47, 252, 0.23);
    border-radius: .3rem;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    &:hover {
      background-color: transparent;
    }
  };
  & div.invalid-feedback {
    margin-left: 4px;
  };
`;

export const MaxSendEGLDButton = styled(Button)`
  position: absolute;
  min-width: 30px;
  top: 14px;
  right: 112px;
  color: ${(props) => props.theme.palette.secondary.main};
  background-color: transparent;
  border: solid 1px ${(props) => props.theme.palette.secondary.main};
  line-height: 1.4;
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.background.white}
  }
`;

export const FormSearchInput = styled(Box)`
  width: 23ch;
  margin-left: .93rem;
  padding: .12rem .5rem;
  display: flex;
  flex-direction: row;
  aling-items: center;
  border-radius: .3rem;
  background-color: rgba(76,47,252, 0.06);
  & input{
    padding: .25rem;
  };
  & fieldset{
    border: none;
  };
  & svg{
    margin-top: 2px;
  }
`;

export const SendInputs = styled(Box)`
  margin-top: .55rem;
  background-color: rgba(76, 47, 252, 0.1);
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;
  border-bottom: solid 1px ${(props) => props.theme.palette.primary.main};
  & label {
    margin: .2rem 0 .2rem .5rem;
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 13px;
  };
  & input.form-control {
    max-width: 300px;
    height: auto;
    border: none;
    background-color: transparent;
    margin: 0 0 0 .5rem;
    padding: 0;
  };
  & input.form-control:focus {
    outline: solid 1px black;
    background-color: transparent;
  };
`;

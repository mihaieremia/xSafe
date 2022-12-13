import { Box, Button } from '@mui/material';
import styled from 'styled-components';

export const LoadSafeButton = styled(Button)`
&&& {
  box-sizing: border-box;
  padding: 23px 24px 19px;
  color:${(props) => props.theme.palette.text.primary} ;
  border-radius: 0;
  border-top: solid 1px rgba(76, 47, 252, 0.03);
  transition: all 300ms linear;
  background: ${(props) => props.theme.palette.button.safe};
  margin-top: 12px;
  width: 100%;
  height: 60px;
  &:hover {
    background-color: ${(props) => props.theme.palette.background.button};
    color: #fff;
  };
}
`;

export const CreateNewSafeButton = styled(LoadSafeButton)`
&&& {
  color: #fff;
  background: ${(props) => props.theme.palette.background.button};
  height: 60px;
  &:hover {
    background-color: ${(props) => props.theme.palette.background.button};
    border-color: ${(props) => props.theme.palette.background.button};
    color: ${(props) => props.theme.palette.background.white};
  };
  @media (max-width:600px) {
    border-radius: 0 0 10px 10px;
  };
}
`;

export const LoadingBox = styled(Box)`
&&& {
  font-weight: bold;
  display: inline-block;
  font-size: 15px;
  clip-path: inset(0 1ch 0 0);
  animation: l 1s steps(4) infinite;
  @keyframes l {
    to {
      clipPath: inset(0 -1ch 0 0);
    };
  };
}
`;

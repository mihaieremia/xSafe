import { Box } from '@mui/system';
import { ReactComponent as MultiversXLogoSymbol } from 'src/assets/img/multiversx-symbol.svg';

interface IProps {
    height?: number;
    width?: number;
    marginRight?: number | string;
}

export const MultiversXLogo = ({
  height = 30,
  width = 30,
  marginRight = '14px',
}: IProps) => (
  <Box marginRight={marginRight}>
    <MultiversXLogoSymbol
      width={width}
      height={height}
    />
  </Box>
);

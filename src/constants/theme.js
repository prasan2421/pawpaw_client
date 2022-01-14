import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#ef2b2d',
    },
    secondary: {
      main: '#002768',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
'use client';
import { createTheme } from '@mui/material/styles';

import { MuiAppBar } from './components/MuiAppBar';
import { MuiTypography } from './components/MuiTypography';

const theme = createTheme({
  cssVariables: true,
  components: {
    MuiAppBar,
    MuiTypography,
  },
});

export default theme;

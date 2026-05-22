'use client';
import { createTheme } from '@mui/material/styles';
import { MuiTypography } from './components/MuiTypography';

const theme = createTheme({
  cssVariables: true,
  components: {
    MuiTypography,
  },
});

export default theme;

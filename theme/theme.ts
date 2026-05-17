'use client';
import { createTheme } from '@mui/material/styles';

import { colorSchemes } from './colorSchemes';
import { MuiAppBar } from './components/MuiAppBar';
import { MuiToolbar } from './components/MuiToolbar';
import { shape } from './shape';
import { typography } from './typography';

const theme = createTheme({
  cssVariables: true,
  colorSchemes,
  components: {
    MuiAppBar,
    MuiToolbar,
  },
  shape,
  typography,
});

export default theme;

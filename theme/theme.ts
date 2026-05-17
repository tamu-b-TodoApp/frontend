'use client';
import { createTheme } from '@mui/material/styles';

import { colorSchemes } from './colorSchemes';
import { MuiIconButton } from './components/MuiIconButton';
import { shape } from './shape';
import { typography } from './typography';

const theme = createTheme({
  cssVariables: true,
  colorSchemes,
  components: {
    MuiIconButton,
  },
  shape,
  typography,
});

export default theme;

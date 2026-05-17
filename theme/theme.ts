'use client';
import { createTheme } from '@mui/material/styles';

import { colorSchemes } from './colorSchemes';
import { typography } from './typography';

const theme = createTheme({
  cssVariables: true,
  colorSchemes,
  typography,
});

export default theme;

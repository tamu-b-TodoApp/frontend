import { type Theme } from '@mui/material/styles';
import { type Components } from '@mui/material/styles';

export const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      zIndex: theme.zIndex.drawer + 1,
    }),
  },
};

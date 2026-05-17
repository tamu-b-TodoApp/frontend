import { type Components, type Theme } from '@mui/material/styles';

export const MuiToolbar: Components<Theme>['MuiToolbar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    }),
  },
};

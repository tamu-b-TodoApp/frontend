import { type Components, type Theme } from '@mui/material/styles';

export const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  defaultProps: {
    position: 'absolute',
    elevation: 0,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      borderBottom: '1px solid',
      borderColor: theme.palette.divider,
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    }),
  },
};

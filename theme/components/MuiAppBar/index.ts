import { type Theme } from '@mui/material/styles';
import { type Components } from '@mui/material/styles';

export const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  defaultProps: {
    color: 'default',
    elevation: 0,
    position: 'fixed',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      zIndex: theme.zIndex.drawer + 1,
      borderBottom: '1px solid',
      borderColor: theme.palette.divider,
    }),
  },
};

import { type Theme } from '@mui/material/styles';
import { type Components } from '@mui/material/styles';

export const MuiTypography: Components<Theme>['MuiTypography'] = {
  styleOverrides: {
    root: {
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            fontSize: '1.5rem',
            lineHeight: 1,
            fontWeight: 'bold',
          },
        },
      ],
    },
  },
};

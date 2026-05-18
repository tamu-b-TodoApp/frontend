import { type FC, type ReactNode } from 'react';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MuiButton from '@mui/material/Button';

type ButtonProps = {
  icon?: ReactNode;
  label?: string;
};

export const Button: FC<ButtonProps> = ({
  icon = <FavoriteBorderOutlinedIcon sx={{ fontSize: 24 }} />,
  label = 'ボタン',
}) => {
  return (
    <MuiButton
      startIcon={icon}
      disableRipple={false}
      sx={{
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '9999px',
        height: 40,
        minWidth: 87,
        px: '14px',
        py: '6px',
        gap: '10px',
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: 'normal',
        textTransform: 'none',
        whiteSpace: 'nowrap',
        '& .MuiButton-startIcon': {
          margin: 0,
        },
        '&:hover': {
          backgroundColor: 'white',
        },
      }}
    >
      {label}
    </MuiButton>
  );
};

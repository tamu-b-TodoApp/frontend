import { type FC } from 'react';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Icon } from './components/Icon';

export const Header: FC = () => {
  return (
    <AppBar
      color="default"
      elevation={0}
      position="fixed"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
            <Icon />
            <Typography component="h1" variant="h1">
              Dashboard
            </Typography>
          </Stack>
          <IconButton
            size="small"
            aria-label="menu"
            sx={{
              border: '1px solid ',
              borderColor: 'divider',
              borderRadius: 2,
            }}
          >
            <MenuRoundedIcon />
          </IconButton>
          {/* <SideMenuMobile open={open} toggleDrawer={toggleDrawer} /> */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

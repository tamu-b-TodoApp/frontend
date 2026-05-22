import { type FC } from 'react';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header: FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
            <CustomIcon />
            <Typography
              variant="h4"
              component="h1"
              sx={{ color: 'text.primary' }}
            >
              Dashboard
            </Typography>
          </Stack>
          <IconButton
            size="small"
            aria-label="menu"
            sx={{
              border: '1px solid ',
              borderColor: 'gray',
              borderRadius: 1,
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

function CustomIcon() {
  return (
    <Box
      sx={{
        width: '1.5rem',
        height: '1.5rem',
        bgcolor: 'black',
        borderRadius: '999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundImage:
          'linear-gradient(135deg, hsl(210, 98%, 60%) 0%, hsl(210, 100%, 35%) 100%)',
        color: 'hsla(210, 100%, 95%, 0.9)',
        border: '1px solid',
        borderColor: 'hsl(210, 100%, 55%)',
        boxShadow: 'inset 0 2px 5px rgba(255, 255, 255, 0.3)',
      }}
    >
      <DashboardRoundedIcon color="inherit" sx={{ fontSize: '1rem' }} />
    </Box>
  );
}

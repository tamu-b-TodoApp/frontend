import { type FC } from 'react';

import { Drawer, drawerClasses, Toolbar } from '@mui/material';

const width = 240;

export const SideMenu: FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: width,
        [`& .${drawerClasses.paper}`]: {
          width: width,
          backgroundColor: 'background.paper',
        },
      }}
    >
      {/* Toolbar分のスペースを確保 */}
      <Toolbar />
      side menu
    </Drawer>
  );
};

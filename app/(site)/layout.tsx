import { type FC, type PropsWithChildren } from 'react';

import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

import { Header } from '@/components/layouts/Header';
import { SideMenu } from '@/components/layouts/SideMenu';

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {/* Toolbar分のスペースを確保 */}
      <Toolbar />
      <Stack direction="row">
        <SideMenu />
        {children}
      </Stack>
    </>
  );
};

export default HomeLayout;

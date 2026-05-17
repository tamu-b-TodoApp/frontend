import { type FC, type PropsWithChildren } from 'react';

import Toolbar from '@mui/material/Toolbar';

import { Header } from '@/components/layouts/Header';

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {/* Toolbar分のスペースを確保 */}
      <Toolbar />
      {children}
    </>
  );
};

export default HomeLayout;

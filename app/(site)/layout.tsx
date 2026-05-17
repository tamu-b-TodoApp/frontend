import { type FC, type PropsWithChildren } from 'react';

import { Header } from '@/components/layouts/Header';

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HomeLayout;

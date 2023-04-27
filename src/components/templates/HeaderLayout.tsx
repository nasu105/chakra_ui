import React, { FC } from 'react'
import { Outlet } from 'react-router-dom';

import { Header } from '../organisms/layout/Header';

// type Props = {
//   children?: ReactNode;
// }

// interface Props {
//   children: ReactNode;
// }

export const HeaderLayout: FC = React.memo(() => {
  // const { children } = props;
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
});

import React from 'react';

import styles from './index.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;

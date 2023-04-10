import { useState } from 'react';
import { useTransform } from 'framer-motion';

import Nav from './Nav';
import SideNav from './SideNav';
import Modal from '../UI/Modal';

import styles from './index.module.scss';

const Layout = ({ children }) => {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Nav openSideNav={() => setSideNavIsOpen(true)} />
        <Modal className={styles.sidenav_modal}>
          {sideNavIsOpen && (
            <SideNav
              sideNavIsOpen
              closeSideNav={() => setSideNavIsOpen(false)}
            />
          )}
        </Modal>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}></footer>
    </>
  );
};

export default Layout;

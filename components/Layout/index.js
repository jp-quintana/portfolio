import Nav from './Nav';

import styles from './index.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Nav />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;

import Nav from './Nav';
import SideNav from './SideNav';

import styles from './index.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      {/* <SideNav /> */}
      <header className={styles.header}>
        <Nav />
      </header>
      {/* <div className={styles.background}>
        <video autoPlay loop muted>
          <source src="videos/background.mp4" type="video/mp4" />
        </video>
      </div> */}
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}></footer>
    </>
  );
};

export default Layout;

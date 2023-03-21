import styles from './index.module.scss';

const Nav = () => {
  return (
    <div className={styles.container}>
      <nav className={`${styles.nav} main-container`}>
        <div className={styles.logo}>jpquintana.dev</div>
        <ul className={styles.list}>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

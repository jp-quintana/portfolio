import { useContext, useEffect, useState } from 'react';
// import ScrollContext from './ScrollContext';
import styles from './index.module.scss';

const Nav = () => {
  // const scrollContext = useContext(ScrollContext);
  const [heroIsGone, setHeroIsGone] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = document.documentElement.scrollTop;

      if (scrollPosition >= heroHeight) {
        setHeroIsGone(true);
      } else {
        setHeroIsGone(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(heroIsGone);

  return (
    <div
      className={`${styles.container} ${
        heroIsGone ? styles.container_rest : ''
      }`}
    >
      <nav
        className={`${styles.nav} ${
          heroIsGone ? styles.nav_rest : ''
        } main-container`}
      >
        <div className={styles.logo}>jpquintana-dev</div>
        <ul className={styles.list}>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

import { useEffect, useState } from 'react';
import { Link, scrollSpy } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

import styles from './index.module.scss';

const Nav = ({ openSideNav }) => {
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

  // useEffect(() => {
  //   scrollSpy.update();

  //   console.log(scrollSpy);
  // }, []);

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
        <div className={styles.logo}>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={100}>
            jpquintana-dev
          </Link>
        </div>
        <ul className={styles.list}>
          <li>
            <Link
              activeClass={styles.hero_is_active}
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass={styles.rest_is_active}
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass={styles.rest_is_active}
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass={styles.rest_is_active}
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              Contact
            </Link>
          </li>
          <li>
            <FaBars onClick={openSideNav} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

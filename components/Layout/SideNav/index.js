import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

import styles from './index.module.scss';

const SideNav = ({ closeSideNav }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} main-container`}>
        <div className={styles.header}>
          <FaTimes />
        </div>
        <nav className={styles.nav}>
          <ul>
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
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;

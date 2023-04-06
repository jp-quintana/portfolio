import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

import styles from './index.module.scss';

const SideNav = ({ sideNavIsOpen, closeSideNav }) => {
  const isBigScreen = useMediaQuery({
    query: '(min-width: 768px)',
  });

  useEffect(() => {
    if (sideNavIsOpen && isBigScreen) {
      closeSideNav();
    }
  }, [isBigScreen]);

  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} main-container`}>
        <div className={styles.header}>
          <FaTimes onClick={closeSideNav} />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
                onClick={closeSideNav}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
                onClick={closeSideNav}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
                onClick={closeSideNav}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
                onClick={closeSideNav}
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

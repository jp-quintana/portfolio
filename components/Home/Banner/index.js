import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

import styles from './index.module.scss';

const Banner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>full stack developer</h1>
          <h2 className={styles.subtitle}>
            currently looking for entry-level job. based out of buenos aires,
            argentina. 📍 🇦🇷
          </h2>
        </div>
        <ul className={styles.socials}>
          <li>
            <a href="">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="">
              <FaGithubSquare />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;

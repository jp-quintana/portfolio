import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

import styles from './index.module.scss';

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.title_wrapper}>
            <h1 className={styles.title}>full stack developer</h1>
            <h2 className={styles.subtitle}>
              currently looking for an entry-level job. based out of buenos
              aires, argentina. 📍 🇦🇷
            </h2>
          </div>
          <ul className={styles.socials}>
            <li>
              <a
                target="_blank"
                href="https://linkedin.com/in/juan-pablo-quintana-685aa7165/"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/jp-quintana">
                <FaGithubSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

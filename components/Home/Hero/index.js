import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

import styles from './index.module.scss';

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.title_wrapper}>
            <h1 className={styles.title}>full-stack-developer</h1>
            <p className={styles.subtitle}>
              currently looking for an entry-level job. based out of buenos
              aires, argentina. 📍 🇦🇷
            </p>
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
          {/* <div className={styles.stack_container}>
            <div className={styles.stack_wrapper}>
              <ul className={styles.icons}>
                <li>
                  <img src="svgs/react.svg" alt="react" />
                </li>
                <li>
                  <img src="svgs/js.svg" alt="js" />
                </li>
                <li>
                  <img src="svgs/scss.svg" alt="scss" />
                </li>
                <li>
                  <img src="svgs/css.svg" alt="css" />
                </li>
                <li>
                  <img src="svgs/html.svg" alt="html" />
                </li>
                <li>
                  <img src="svgs/node.svg" alt="node" />
                </li>
                <li>
                  <img src="svgs/express.svg" alt="express" />
                </li>
                <li>
                  <img src="svgs/mongo.svg" alt="mongo" />
                </li>
                <li>
                  <img src="svgs/firebase.svg" alt="firebase" />
                </li>
              </ul>
              <p className={styles.comment}>// stack</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

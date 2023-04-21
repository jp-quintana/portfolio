import { FaAngleRight } from 'react-icons/fa';

import styles from './index.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image_container}>
          <div className={styles.image_wrapper}>
            <img src="images/pp.jpg" alt="" />
          </div>
        </div>
        <div className={styles.description_wrapper}>
          <h2 className={styles.title}>about-me</h2>
          <p className={styles.description}>
            My name is Juan Pablo Quintana and I'm currently working as an
            Accounting Administrative in a small company in Buenos Aires,
            Argentina. For the past year and a half I've been learning to code
            and I'm currently looking for my first job in the industry. I
            currently work with the following stack:
          </p>
          <ul className={styles.list}>
            <li>
              <FaAngleRight />
              React
            </li>
            <li>
              <FaAngleRight />
              Javascript
            </li>
            <li>
              <FaAngleRight />
              CSS/SCSS
            </li>
            <li>
              <FaAngleRight />
              HTML
            </li>
            <li>
              <FaAngleRight />
              Node
            </li>
            <li>
              <FaAngleRight />
              Express
            </li>
            <li>
              <FaAngleRight />
              Mongo
            </li>
            <li>
              <FaAngleRight />
              Firebase
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

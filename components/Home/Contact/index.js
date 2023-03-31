import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import styles from './index.module.scss';

const Contact = () => {
  return (
    <div id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>contact-me</h2>
          <ul className={styles.list}>
            <li>
              <span>
                <FaEnvelope />
              </span>
              juanquintana1996@gmail.com
            </li>
            <li>
              <span>
                <FaMapMarkerAlt />
              </span>
              Buenos Aires, Argentina
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;

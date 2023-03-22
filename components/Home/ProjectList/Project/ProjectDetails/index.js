import { FaAngleRight } from 'react-icons/fa';

import styles from './index.module.scss';

const ProjectDetails = ({
  projectName,
  name,
  description,
  features,
  stackItems,
  buttons,
}) => {
  const descriptionContent =
    projectName === 'react-shopping-cart' ? (
      <p>
        React and Firebase shopping cart app. This app's design is a clone of{' '}
        <a target="_blank" href="https://alphaleteathletics.com/">
          alphalete's webpage
        </a>
        , a premium fitness and lifestyle wear brand.
      </p>
    ) : (
      <p>{description}</p>
    );

  return (
    <div className={styles.container}>
      <p className={styles.header}>{name}</p>
      <div className={styles.body}>{descriptionContent}</div>
      <div className={styles.features}>
        Features:
        <ul>
          {features.map((feature) => (
            <li id={feature.id}>
              <FaAngleRight />
              {feature.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default ProjectDetails;

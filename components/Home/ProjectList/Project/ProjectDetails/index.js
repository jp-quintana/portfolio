import { FaAngleRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

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
      <p className={styles.title}>{projectName}</p>
      <div className={styles.description}>{descriptionContent}</div>
      <div className={styles.features}>
        Features:
        <ul>
          {features.map((feature) => (
            <li key={feature.id}>
              <FaAngleRight />
              {feature.name}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className={styles.stack}>
        Stack:
        <ul className={styles.icons}>
          {stackItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.image} />
            </li>
          ))}
        </ul>
      </div> */}
      <div className={styles.footer}>
        {buttons.map((button) => (
          <a key={button.id} href={button.href} className={styles.button}>
            {button.content}{' '}
            {button.content === 'code' ? <FaGithub /> : <FaExternalLinkAlt />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;

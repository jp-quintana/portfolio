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
  let descriptionContent;

  if (projectName === 'react-shopping-cart') {
    descriptionContent = (
      <p>
        React and Firebase shopping cart app. This app's design is a clone of{' '}
        <a target="_blank" href="https://alphaleteathletics.com/">
          Alphalete's webpage
        </a>
        , a premium fitness and lifestyle wear brand.
      </p>
    );
  }

  if (projectName === 'mern-note-app') {
    descriptionContent = (
      <p>
        MERN note app. This app's design is a clone of popular productivity app{' '}
        <a target="_blank" href="https://www.notion.so/">
          Notion
        </a>
        . Currently WIP, this app looks to provide the ability to create and
        save different notes. Will be done soon!
      </p>
    );
  }

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

      <div className={styles.footer}>
        {buttons.map((button) => (
          <div key={button.id}>
            {button.href && (
              <a
                // key={}
                target="_blank"
                href={button.href ? button.href : ''}
                className={styles.button}
                disabled
              >
                {button.content} {button.content === 'code' && <FaGithub />}
                {button.content === 'live demo' && <FaExternalLinkAlt />}
              </a>
            )}
            {!button.href && (
              <div
                // key={button.id}
                className={`${styles.button} ${styles.disabled}`}
              >
                {button.content} {button.content === 'code' && <FaGithub />}
                {button.content === 'live demo' && <FaExternalLinkAlt />}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;

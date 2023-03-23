import ProjectDetails from './ProjectDetails';

import styles from './index.module.scss';

const Project = ({ index, name, image, details }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} main-container`}>
        <h2 className={styles.header}>{name}</h2>
        <div className={styles.body}>
          <img className={styles.image} src={image} alt="" />
          <ProjectDetails
            projectName={name}
            name={details.name}
            description={details.description}
            features={details.features}
            stackItems={details.stackItems}
            buttons={details.buttons}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;

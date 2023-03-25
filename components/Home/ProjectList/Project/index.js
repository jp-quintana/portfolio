import ProjectDetails from './ProjectDetails';

import styles from './index.module.scss';

const Project = ({ index, name, image, details }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.content}>
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

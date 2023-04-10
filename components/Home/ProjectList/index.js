import Project from './Project';

import styles from './index.module.scss';

const ProjectList = ({ projects }) => {
  return (
    <section id="projects" className={styles.section}>
      {projects.map((project, index) => (
        <Project
          key={project.id}
          index={index}
          name={project.name}
          images={project.images}
          details={project.details}
        />
      ))}
    </section>
  );
};

export default ProjectList;

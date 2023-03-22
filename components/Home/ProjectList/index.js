import Project from './Project';

import styles from './index.module.scss';

const projects = [
  {
    id: '1',
    name: 'react-shopping-cart',
    image: 'images/flaakko.jpg',
    details: {
      name: 'flaakko',
      description: '',
      features: [
        { id: '1', name: 'cart functionality' },
        { id: '2', name: 'basic inventory tracker' },
        { id: '3', name: 'auth (email/password & anonymous)' },
        { id: '4', name: 'mock checkout page' },
        { id: '5', name: 'user orders' },
      ],
      stackItems: [
        { id: '1', image: 'react' },
        { id: '2', image: 'firebase' },
        { id: '3', image: 'scss' },
      ],
      buttons: [
        {
          id: '1',
          content: 'code',
          href: 'https://github.com/jp-quintana/react-shopping-cart',
          image: 'github',
        },
        {
          id: '2',
          content: 'live demo',
          href: 'https://flaakko-v2.web.app/',
        },
      ],
    },
  },
  {
    id: '2',
    name: 'react-shopping-cart',
    image: 'images/flaakko.jpg',
    details: {
      name: 'flaakko',
      description: '',
      features: [
        { id: '1', name: 'cart functionality' },
        { id: '2', name: 'basic inventory tracker' },
        { id: '3', name: 'auth (email/password & anonymous)' },
        { id: '4', name: 'mock checkout page' },
        { id: '5', name: 'user orders' },
      ],
      stackItems: [
        { id: '1', image: 'react' },
        { id: '2', image: 'firebase' },
        { id: '3', image: 'scss' },
      ],
      buttons: [
        {
          id: '1',
          content: 'code',
          href: 'https://github.com/jp-quintana/react-shopping-cart',
          image: 'github',
        },
        {
          id: '2',
          content: 'live demo',
          href: 'https://flaakko-v2.web.app/',
        },
      ],
    },
  },
];

const ProjectList = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section_title_wrapper}>
        <code className={styles.section_title}>// projects</code>
      </div>
      {projects.map((project, index) => (
        <Project
          id={project.id}
          index={index}
          name={project.name}
          image={project.image}
          details={project.details}
        />
      ))}
    </section>
  );
};

export default ProjectList;

import ProjectDetails from './ProjectDetails';
import Slider from 'components/UI/Slider';

import styles from './index.module.scss';

const Project = ({ index, name, images, details }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.slider_wrapper}>
            <Slider
              slides={images}
              slidesPerView={1}
              spaceBetween={30}
              loop
              centeredSlides
              grabCursor
              sliderClassName={styles.slider}
              slideClassName={styles.slide}
              imageClassName={styles.image}
            />
          </div>
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

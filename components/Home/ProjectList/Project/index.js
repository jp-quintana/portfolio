import ProjectDetails from './ProjectDetails';
import Slider from 'components/UI/Slider';

import styles from './index.module.scss';

const Project = ({ index, name, image, details }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <h2 className={styles.title}>{name}</h2> */}
        <div className={styles.content}>
          <div className={styles.slider_wrapper}>
            <Slider
              // slides={selectedVariant.images}
              bp={{
                500: {
                  slidesPerView: 1.5,
                },
                600: {
                  slidesPerView: 1.7,
                },
                800: {
                  slidesPerView: 2,
                },
              }}
              slidesPerView={1.3}
              spaceBetween={30}
              loop={true}
              centeredSlides={true}
              grabCursor={true}
              sliderClassName={styles.slider}
              slideClassName={styles.slide}
              imageClassName={styles.image}
            />
            {/* <img className={styles.image} src={image} alt="" /> */}
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

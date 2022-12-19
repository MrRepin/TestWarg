import ship from '../../assets/ship.svg';

import styles from './styles.module.css';

export const ProgressBar = (props) => {
  const {
    min,
    max,
    value,
  } = props;

  const percentage = value / (max - min) * 100;

  const shipPositionStyle = {
    left: `${percentage}%`,
    transform: `translateX(${-percentage}%)`,
  };

  const progressLineStyle = {
    width: `${percentage}%`,
  };

  return (
    <div className={styles.progressBar}>
      <div
        style={shipPositionStyle}
        className={styles.valueWrapper}
      >
        <img
          className={styles.icon}
          src={ship}
        />
        <span className={styles.value}>
          { value }
        </span>
      </div>
      <div className={styles.wave} />
      <div
        style={progressLineStyle}
        className={styles.progressLine}
      >
        <div className={styles.topLine} />
      </div>
    </div>
  );
};
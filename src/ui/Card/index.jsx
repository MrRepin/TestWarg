import styles from './styles.module.css';

export const Card = (props) => {
  const { children } = props;

  return (
    <div className={styles.card}>
      { children }
    </div>
  );
};
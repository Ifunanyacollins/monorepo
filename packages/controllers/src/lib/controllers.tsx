import styles from './controllers.module.css';

/* eslint-disable-next-line */
export interface ControllersProps {}

export function Controllers(props: ControllersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Controllers!</h1>
    </div>
  );
}

export default Controllers;

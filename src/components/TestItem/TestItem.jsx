import styles from './TestItem.module.scss';
import arrow from '../../assets/arrow.svg';

import Button from '../Button/Button';

const TestItem = ({ title }) => {
  return (
    <div className={styles['test-item']}>
      <div className={styles['test-item__wrapp']}>
        <img src={arrow} alt="arrow" />
        <h2>{title}</h2>
      </div>
      <Button>начать</Button>
    </div>
  );
};

export default TestItem;

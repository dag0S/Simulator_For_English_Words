import { useContext } from 'react';
import Button from '../Button/Button';
import { TestsContext } from '../../context/context';

import styles from './TestItem.module.scss';
import arrow from '../../assets/arrow.svg';

const TestItem = ({ title, id }) => {
  const { toggleListHandler } = useContext(TestsContext);

  return (
    <div className={styles['test-item']}>
      <div className={styles['test-item__wrapp']}>
        <img src={arrow} alt="arrow" />
        <h2>{title}</h2>
      </div>
      <Button onClick={toggleListHandler.bind(null, 'wordList', id)}>начать</Button>
    </div>
  );
};

export default TestItem;

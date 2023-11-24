import styles from './TestList.module.scss';

import TestItem from '../TestItem/TestItem';

const TestList = ({ units }) => {
  const items = units.map(unit => (
    <TestItem key={unit.id} title={unit.title} />
  ));

  return <div className={styles['test-list']}>{items}</div>;
};

export default TestList;

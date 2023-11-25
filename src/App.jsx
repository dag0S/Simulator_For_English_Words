import { useContext, useState } from 'react';

import Card from './components/Card/Card';
import Header from './components/Header/Header';
import TestList from './components/TestList/TestList';

import styles from './App.module.scss';
import data from './assets/data/data';
import { TestsContext } from './context/context';

const App = () => {
  const { isTestList, isWordList, isResultList, toggleListHandler } =
    useContext(TestsContext);

  const [units, setUnits] = useState(data);

  const getUnitsHandler = units => {
    setUnits(units);
  };

  return (
    <>
      <Header onSetUnit={getUnitsHandler} />
      <main>
        <div className="container">
          <Card className={styles['main-card']}>
            {isTestList && <TestList units={units} />}
          </Card>
        </div>
      </main>
    </>
  );
};

export default App;

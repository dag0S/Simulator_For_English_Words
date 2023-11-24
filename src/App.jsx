import { useState } from 'react';

import Card from './components/Card/Card';
import Header from './components/Header/Header';
import TestList from './components/TestList/TestList';

import styles from './App.module.scss';
import data from './assets/data/data';

const App = () => {
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
            <TestList units={units} />
          </Card>
        </div>
      </main>
    </>
  );
};

export default App;

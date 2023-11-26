import { useContext, useState } from 'react';

import Card from './components/Card/Card';
import Header from './components/Header/Header';
import TestList from './components/TestList/TestList';
import WordList from './components/WordList/WordList';
import Footer from './Footer/Footer';

import styles from './App.module.scss';
import data from './assets/data/data';
import { TestsContext } from './context/context';

const App = () => {
  const {
    isTestList,
    isWordList,
    isResultList,
    toggleListHandler,
    currentUnit,
    randomWordsForTest,
  } = useContext(TestsContext);

  const [units, setUnits] = useState(data);

  const getUnitsHandler = units => {
    setUnits(units);
  };

  return (
    <>
      <div className="wrapper">
        <Header onSetUnit={getUnitsHandler} />
        <main className={styles.main}>
          <div className="container">
            <Card className={styles['main-card']}>
              {isTestList && <TestList units={units} />}
              {isWordList && (
                <WordList
                  words={randomWordsForTest}
                  title={currentUnit.title}
                />
              )}
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;

import { createContext, useState } from 'react';
import data from '../assets/data/data';
import getRandomWords from '../utils/randomWords';

export const TestsContext = createContext('');

const TestsProvider = ({ children }) => {
  const [isTestList, setIsTestList] = useState(true);
  const [isWordList, setIsWordList] = useState(false);
  const [isResultList, setIsResultList] = useState(false);

  let unitForTest;

  const [currentUnit, setCurrentUnit] = useState({});
  const [randomWordsForTest, setRandomWordsForTest] = useState([]);

  const toggleListHandler = (list, id = null) => {
    if (list === 'testList') {
      setIsWordList(false);
      setIsResultList(false);
      setIsTestList(true);
    } else if (list === 'wordList') {
      unitForTest = data.find(unit => unit.id === id);
      setCurrentUnit({ ...unitForTest });

      setRandomWordsForTest([...getRandomWords(unitForTest, 10)]);

      console.log(unitForTest);
      console.log(randomWordsForTest);

      setIsResultList(false);
      setIsTestList(false);
      setIsWordList(true);
    } else if (list === 'resultList') {
      setIsTestList(false);
      setIsWordList(false);
      setIsResultList(true);
    } else {
      return;
    }
  };

  const value = {
    isTestList,
    isWordList,
    isResultList,
    toggleListHandler,
    currentUnit,
    randomWordsForTest,
  };

  return (
    <TestsContext.Provider value={value}>{children}</TestsContext.Provider>
  );
};

export default TestsProvider;

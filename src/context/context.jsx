import { createContext, useState } from 'react';

export const TestsContext = createContext('');

const TestsProvider = ({ children }) => {
  const [isTestList, setIsTestList] = useState(true);
  const [isWordList, setIsWordList] = useState(false);
  const [isResultList, setIsResultList] = useState(false);

  const toggleListHandler = list => {
    if (list === 'testList') {
      setIsWordList(false);
      setIsResultList(false);
      setIsTestList(true);
    } else if (list === 'wordList') {
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

  const value = { isTestList, isWordList, isResultList, toggleListHandler };

  return (
    <TestsContext.Provider value={value}>{children}</TestsContext.Provider>
  );
};

export default TestsProvider;

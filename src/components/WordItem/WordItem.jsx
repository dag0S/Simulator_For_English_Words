import { useState } from 'react';
import styles from './WordItem.module.scss';

const WordItem = ({ index, word, onGetAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const getUserAnswer = e => {
    e.preventDefault();
    setUserAnswer(e.target.value);
    onGetAnswer(userAnswer, word);
  };
  return (
    <div className={styles.word}>
      <div className={styles.word__wrapp}>
        <p>{index}.</p>
        <p>{word}</p>
      </div>
      <input
        type="text"
        name={word}
        onChange={getUserAnswer}
        value={userAnswer}
      />
    </div>
  );
};

export default WordItem;

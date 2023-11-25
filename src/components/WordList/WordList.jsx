import { useState } from 'react';
import Button from '../Button/Button';
import WordItem from '../WordItem/WordItem';
import styles from './WordList.module.scss';

const WordList = ({ words, title }) => {
  const answers = {};

  const getAnswersHandler = (answer, name) => {
    answers[name] = answer;
  };

  const wordItems = words.map((word, index) => (
    <WordItem
      key={Math.random()}
      index={index + 1}
      word={word}
      onGetAnswer={getAnswersHandler}
    />
  ));

  const getUserAnswersHandler = e => {
    e.preventDefault();
    console.log(answers);
  };

  return (
    <div className={styles['word-list']}>
      <h2>TEST: {title}</h2>
      <form
        className={styles['word-list__wrapp']}
        id="testForm"
        onSubmit={getUserAnswersHandler}
      >
        {wordItems}
      </form>
      <Button form="testForm">Отправить</Button>
    </div>
  );
};

export default WordList;

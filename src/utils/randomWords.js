export default (unit, amount) => {
  let wordsForTest = [];
  console.log(unit);
  for (let i = 0; i < amount; i++) {
    console.log(unit.words.lenght);
    let index = Math.floor(Math.random() * unit.words.length);
    let word = unit.words[index].eng;
    unit.words.splice(index, 1);
    wordsForTest.push(word);
  }
  return wordsForTest;
};

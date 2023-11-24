import styles from './Search.module.scss';
import lupa from '../../assets/lupa.svg';

import data from '../../assets/data/data';

const runSearch = query => {
  if (!query) return data;

  const lowerCaseQuery = query.toLowerCase();

  return data.filter(
    unit =>
      unit.words
        .map(word => word.eng)
        .join(' ')
        .includes(lowerCaseQuery) ||
      unit.words
        .map(word => word.rus.join(' '))
        .flat()
        .join(' ')
        .includes(lowerCaseQuery) ||
      unit.title.toLowerCase().includes(lowerCaseQuery) ||
      unit.description.toLowerCase().includes(lowerCaseQuery)
  );
};

const Search = ({ onSetUnit }) => {
  const changeHandler = e => {
    const foundUnit = runSearch(e.target.value);
    onSetUnit(foundUnit);
  };

  return (
    <form className={styles.form}>
      <label htmlFor="search">
        <img src={lupa} alt="search" />
      </label>
      <input
        type="text"
        id="search"
        placeholder="поиск модуля по словам..."
        onChange={changeHandler}
      />
    </form>
  );
};

export default Search;

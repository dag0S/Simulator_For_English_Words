import { useContext } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import help from '../../assets/help.svg';

import Search from '../Search/Search';
import { TestsContext } from '../../context/context';

const Header = ({ onSetUnit }) => {
  const ctx = useContext(TestsContext);

  const setUnitHandler = units => {
    onSetUnit(units);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <img src={logo} alt="logo" />
          {ctx.isTestList && <Search onSetUnit={setUnitHandler} />}
          <img src={help} alt="help" />
        </div>
      </div>
    </header>
  );
};

export default Header;

import styles from './Footer.module.scss';
import logo from '../assets/logo.svg';
import vk from '../assets/vk.svg';
import gitHub from '../assets/gitHub.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <img src={logo} alt="logo" />
          <p>
            автор{' '}
            <a
              href="https://vk.com/tovar_dlr_givotnblx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Данила Государев
            </a>
          </p>
          <div className={styles['footer__icon-wrapper']}>
            <a
              href="https://vk.com/tovar_dlr_givotnblx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={vk} alt="vk" />
            </a>
            <a
              href="https://github.com/dag0S"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHub} alt="giHub" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

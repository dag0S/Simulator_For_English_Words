import styles from './Button.module.scss';

const Button = ({ children, onClick, form }) => {
  return (
    <button className={styles.button} onClick={onClick} form={form}>
      {children}
    </button>
  );
};

export default Button;

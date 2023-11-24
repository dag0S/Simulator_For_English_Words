import styles from './Card.module.scss';

const Card = ({ children, className }) => {
  const cn = `${styles.card} ${className}`;
  return <div className={cn}>{children}</div>;
};

export default Card;

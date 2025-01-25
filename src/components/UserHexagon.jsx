import styles from "./UserHexagon.module.css";

const UserHexagon = ({
  image,
  stateIcon,
  back,
  backHover,
  text,
  handleClick,
}) => {
  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt="" />
        <img className={styles.badge} src={stateIcon} alt="" />
      </div>
      <div className={styles.backWrapper}>
        <img className={styles.back} src={back} alt="" />
        <img className={styles.backHover} src={backHover} alt="" />
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default UserHexagon;

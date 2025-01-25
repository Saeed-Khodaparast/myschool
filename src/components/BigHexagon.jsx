import styles from "./BigHexagon.module.css";

const BigHexagon = ({
  gender,
  icon,
  hoverIcon,
  back,
  backHover,
  iconSize,
  text,
  handleClick,
}) => {
  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.imageWrapper}>
        <img
          className={`${
            iconSize === "small" ? styles.smallIcon : styles.icon
          } ${styles.defaultIcon}`}
          src={icon}
          alt=""
        />
        <img
          className={`${
            iconSize === "small" ? styles.smallIcon : styles.icon
          } ${styles.hoverIcon}`}
          src={hoverIcon}
          alt=""
        />
        <img className={styles.back} src={back} alt="" />
        <img className={styles.backHover} src={backHover} alt="" />
      </div>
      <span
        className={`${styles.text} ${
          gender === "boy" ? styles.textBlue : styles.textPink
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default BigHexagon;

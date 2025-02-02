import styles from "./BigHexagon.module.css";

const BigHexagon = ({
  color,
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
        <img
          className={`${styles.backHover}
          ${color === "blue" && styles.backHoverBlue}
          ${color === "pink" && styles.backHoverPink} 
          ${color === "yellow" && styles.backHoverYellow}
          ${color === "red" && styles.backHoverRed}  
          `}
          src={backHover}
          alt=""
        />
      </div>
      <span
        className={`${styles.text} 
        ${color === "blue" && styles.textBlue}
        ${color === "pink" && styles.textPink} 
        ${color === "yellow" && styles.textYellow}
        ${color === "red" && styles.textRed}          
        `}
      >
        {text}
      </span>
    </div>
  );
};

export default BigHexagon;

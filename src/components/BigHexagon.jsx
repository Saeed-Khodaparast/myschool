import styles from "./BigHexagon.module.css";

const BigHexagon = ({ icon, iconSize, text }) => {
  return (
    <div className={styles.container}>
      <img
        className={`${iconSize === "small" ? styles.smallIcon : styles.icon}`}
        src={icon}
        alt=""
      />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default BigHexagon;

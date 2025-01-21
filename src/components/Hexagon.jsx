import styles from "./Hexagon.module.css";
const Hexagon = ({ icon, text }) => {
  return (
    <>
      <img className={styles.icon} src={icon} alt="" />
      <span className={styles.text}>{text}</span>
    </>
  );
};

export default Hexagon;

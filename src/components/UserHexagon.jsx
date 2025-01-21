import styles from "./UserHexagon.module.css";

const UserHexagon = ({ name }) => {
  return (
    <>
      <img className={styles.image} alt="" />
      <img className={styles} alt="" />
      <span className={styles.name}>{name}</span>
    </>
  );
};

export default UserHexagon;

import styles from "./UserHexagon.module.css";

const UserHexagon = ({ name }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src="/myschool/images/user.png" alt="" />
      <img className={styles.badge} src="/myschool/images/badge.svg" alt="" />
      <span className={styles.name}>{name}</span>
    </div>
  );
};

export default UserHexagon;

import { useNavigate } from "react-router-dom";
import styles from "./SelectSchool.module.css";
import Hexagon from "./Hexagon";
import BigHexagon from "./BigHexagon";

const SelectSchool = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div
        className={`${styles.hexagon} ${styles.returnContainer}`}
        onClick={() => navigate("/admin")}
      >
        <Hexagon
          icon="/myschool/images/ic-arrow-left.svg"
          iconSize="small"
          text="بازگشت"
        />
      </div>
      <div className={styles.circle}>
        <img
          className={styles.schoolLogo}
          src="/myschool/images/school-logo.svg"
          alt=""
        />
      </div>
      <p className={styles.title}>سیستم مدیریت مدرسه غیر انتفاعی طرح نو</p>
      <div
        className={`${styles.bigHexagon} ${styles.boyContainer}`}
        onClick={() => navigate("/selectshift")}
      >
        <BigHexagon icon="/myschool/images/ic-boy.svg" text="مدرسه پسرانه" />
      </div>
      <div
        className={`${styles.bigHexagon} ${styles.girlContainer}`}
        onClick={() => navigate("/selectshift")}
      >
        <BigHexagon icon="/myschool/images/ic-girl.svg" text="مدرسه دخترانه" />
      </div>
    </div>
  );
};

export default SelectSchool;

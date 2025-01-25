import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./SelectSchool.module.css";
import Hexagon from "./Hexagon";
import BigHexagon from "./BigHexagon";

const SelectSchool = () => {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const navigate = useNavigate();

  // Add useEffect to handle background loading
  useEffect(() => {
    const img = new Image();
    img.src = "/myschool/images/bg-admin.png"; // Replace with your actual background image URL
    img.onload = () => {
      setIsBackgroundLoaded(true);
    };
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        opacity: isBackgroundLoaded ? 1 : 0,
        // transition: "opacity 0.6s ease",
      }}
    >
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
      <div className={styles.boyContainer}>
        <BigHexagon
          gender="boy"
          icon="/myschool/images/ic-boy.svg"
          hoverIcon="/myschool/images/ic-boy-on.svg"
          back="/myschool/images/big-hexagon.svg"
          backHover="/myschool/images/big-hexagon-on-boy.svg"
          handleClick={() => navigate("/selectshift")}
          text="مدرسه پسرانه"
        />
      </div>

      <div className={styles.girlContainer}>
        <BigHexagon
          gender="girl"
          icon="/myschool/images/ic-girl.svg"
          hoverIcon="/myschool/images/ic-girl-on.svg"
          back="/myschool/images/big-hexagon.svg"
          backHover="/myschool/images/big-hexagon-on-girl.svg"
          handleClick={() => navigate("/selectshift")}
          text="مدرسه دخترانه"
        />
      </div>
    </div>
  );
};

export default SelectSchool;

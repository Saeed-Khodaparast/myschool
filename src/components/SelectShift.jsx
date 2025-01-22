import styles from "./SelectShift.module.css";
import Hexagon from "./Hexagon";
import BigHexagon from "./BigHexagon";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SelectShift = () => {
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
        onClick={() => navigate("/selectschool")}
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
        className={`${styles.bigHexagon} ${styles.morningContainer}`}
        // onClick={() => navigate("/")}
      >
        <BigHexagon icon="/myschool/images/ic-sun.svg" text="شیفت صبح" />
      </div>
      <div className={`${styles.bigHexagon} ${styles.eveningContainer}`}>
        <BigHexagon icon="/myschool/images/ic-sun.svg" text="شیفت عصر" />
      </div>
    </div>
  );
};

export default SelectShift;

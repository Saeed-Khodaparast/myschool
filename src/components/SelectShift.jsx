import styles from "./SelectShift.module.css";
import Hexagon from "./Hexagon";
import BigHexagon from "./BigHexagon";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SelectShift = () => {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const { gender } = useParams();
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
      <div className={styles.returnContainer}>
        <Hexagon
          icon="/myschool/images/ic-arrow-left.svg"
          hoverIcon="/myschool/images/ic-arrow-left.svg"
          back="/myschool/images/hexagon.svg"
          backHover="/myschool/images/hexagon-on.svg"
          iconSize="small"
          text="بازگشت"
          handleClick={() => navigate("/selectschool")}
        />
      </div>
      <div className={styles.circle}>
        <img
          className={styles.schoolLogo}
          src="/myschool/images/school-logo.svg"
          alt=""
        />
      </div>
      <p className={styles.title}>
        {gender === "boy"
          ? "سیستم مدیریت مدرسه غیرانتفاعی پسرانه طرح نو"
          : "سیستم مدیریت مدرسه غیرانتفاعی دخترانه طرح نو"}
      </p>
      <div className={styles.morningContainer}>
        <BigHexagon
          color="yellow"
          icon="/myschool/images/ic-sun.svg"
          hoverIcon="/myschool/images/ic-sun-yellow.svg"
          back="/myschool/images/big-hexagon.svg"
          backHover="/myschool/images/big-hexagon-yellow.svg"
          text="شیفت صبح"
        />
      </div>
      <div className={styles.eveningContainer}>
        <BigHexagon
          color="red"
          icon="/myschool/images/ic-sun.svg"
          hoverIcon="/myschool/images/ic-sun-red.svg"
          back="/myschool/images/big-hexagon.svg"
          backHover="/myschool/images/big-hexagon-red.svg"
          text="شیفت عصر"
        />
      </div>
    </div>
  );
};

export default SelectShift;

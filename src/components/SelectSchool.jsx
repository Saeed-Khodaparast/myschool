import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./SelectSchool.module.css";
import Hexagon from "./Hexagon";
import BigHexagon from "./BigHexagon";

const SelectSchool = () => {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [isHexagonLoaded, setIsHexagonLoaded] = useState(false);
  const [isCircleLoaded, setIsCircleLoaded] = useState(false);
  const [isCircleHoverLoaded, setIsCircleHoverLoaded] = useState(false);
  const [isBigHexagonLoaded, setIsBigHexagonLoaded] = useState(false);
  const [isBigHexagonBlueLoaded, setIsBigHexagonBlueLoaded] = useState(false);
  const [isBigHexagonPinkLoaded, setIsBigHexagonPinkLoaded] = useState(false);
  const navigate = useNavigate();

  // Add useEffect to handle background loading
  useEffect(() => {
    const backgroundImage = new Image();
    const circleImage = new Image();
    const circleHoverImage = new Image();
    const hexagonImage = new Image();
    const hexagonHoverImage = new Image();
    const bigHexagonImage = new Image();
    const bigHexagonBlueImage = new Image();
    const bigHexagonPinkImage = new Image();
    backgroundImage.src = "/myschool/images/bg-admin.png";
    circleImage.src = "/myschool/images/circle.svg";
    circleHoverImage.src = "/myschool/images/circle-on.svg";
    hexagonImage.src = "/myschool/images/hexagon.svg";
    hexagonHoverImage.src = "/myschool/images/hexagon-on.svg";
    bigHexagonImage.src = "/myschool/images/big-hexagon.svg";
    bigHexagonBlueImage.src = "/myschool/images/big-hexagon-blue.svg";
    bigHexagonPinkImage.src = "/myschool/images/big-hexagon-pink.svg";
    backgroundImage.onload = () => {
      setIsBackgroundLoaded(true);
    };
    circleImage.onload = () => {
      setIsCircleLoaded(true);
    };
    circleHoverImage.onload = () => {
      setIsCircleHoverLoaded(true);
    };
    hexagonImage.onload = () => {
      setIsHexagonLoaded(true);
    };
    hexagonHoverImage.onload = () => {
      setIsHexagonLoaded(true);
    };
    bigHexagonImage.onload = () => {
      setIsBigHexagonLoaded(true);
    };
    bigHexagonBlueImage.onload = () => {
      setIsBigHexagonBlueLoaded(true);
    };
    bigHexagonPinkImage.onload = () => {
      setIsBigHexagonPinkLoaded(true);
    };
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        opacity:
          isBackgroundLoaded &&
          isHexagonLoaded &&
          isCircleLoaded &&
          isCircleHoverLoaded &&
          isBigHexagonLoaded &&
          isBigHexagonBlueLoaded &&
          isBigHexagonPinkLoaded
            ? 1
            : 0,
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
          handleClick={() => navigate("/admin")}
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
          color="blue"
          icon="/myschool/images/ic-boy.svg"
          hoverIcon="/myschool/images/ic-boy-on.svg"
          back="/myschool/images/big-hexagon.svg"
          backHover="/myschool/images/big-hexagon-blue.svg"
          handleClick={() => navigate(`/selectshift/${"boy"}`)}
          text="مدرسه پسرانه"
        />
      </div>

      <div className={styles.girlContainer}>
        <BigHexagon
          color="pink"
          icon="/myschool/images/ic-girl.svg"
          hoverIcon="/myschool/images/ic-girl-on.svg"
          back="/myschool/images/big-hexagon.svg"
          backHover="/myschool/images/big-hexagon-pink.svg"
          handleClick={() => navigate(`/selectshift/${"girl"}`)}
          text="مدرسه دخترانه"
        />
      </div>
    </div>
  );
};

export default SelectSchool;

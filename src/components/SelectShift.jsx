import styles from "./SelectShift.module.css";
import Hexagon from "./Hexagon";
import BigHexagon from "./BigHexagon";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SelectShift = () => {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [isHexagonLoaded, setIsHexagonLoaded] = useState(false);
  const [isCircleLoaded, setIsCircleLoaded] = useState(false);
  const [isCircleHoverLoaded, setIsCircleHoverLoaded] = useState(false);
  const [isBigHexagonLoaded, setIsBigHexagonLoaded] = useState(false);
  const [isBigHexagonYellowLoaded, setIsBigHexagonYellowLoaded] =
    useState(false);
  const [isBigHexagonRedLoaded, setIsBigHexagonRedLoaded] = useState(false);
  const { gender } = useParams();
  const navigate = useNavigate();

  // Add useEffect to handle background loading
  useEffect(() => {
    const backgroundImage = new Image();
    const circleImage = new Image();
    const circleHoverImage = new Image();
    const hexagonImage = new Image();
    const hexagonHoverImage = new Image();
    const bigHexagonImage = new Image();
    const bigHexagonYellowImage = new Image();
    const bigHexagonRedImage = new Image();
    backgroundImage.src = "/myschool/images/bg-admin.png";
    circleImage.src = "/myschool/images/circle.svg";
    circleHoverImage.src = "/myschool/images/circle-on.svg";
    hexagonImage.src = "/myschool/images/hexagon.svg";
    hexagonHoverImage.src = "/myschool/images/hexagon-on.svg";
    bigHexagonImage.src = "/myschool/images/big-hexagon.svg";
    bigHexagonYellowImage.src = "/myschool/images/big-hexagon-yellow.svg";
    bigHexagonRedImage.src = "/myschool/images/big-hexagon-red.svg";
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
    bigHexagonYellowImage.onload = () => {
      setIsBigHexagonYellowLoaded(true);
    };
    bigHexagonRedImage.onload = () => {
      setIsBigHexagonRedLoaded(true);
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
          isBigHexagonYellowLoaded &&
          isBigHexagonRedLoaded
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
          handleClick={() => navigate(`/academicyear/${gender}/${"morning"}`)}
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
          handleClick={() => navigate(`/academicyear/${gender}/${"evening"}`)}
        />
      </div>
    </div>
  );
};

export default SelectShift;

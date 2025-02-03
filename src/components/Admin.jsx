import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Admin.module.css";
import Hexagon from "./Hexagon";
import UserHexagon from "./UserHexagon";

const Admin = () => {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [isHexagonLoaded, setIsHexagonLoaded] = useState(false);
  const [isCircleLoaded, setIsCircleLoaded] = useState(false);
  const [isCircleHoverLoaded, setIsCircleHoverLoaded] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = () => {
    document.getElementById("logo-picker").click();
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Update the logo image source
        const logoElement = document.querySelector(`.${styles.schoolLogo}`);
        logoElement.src = e.target.result;

        // Here you can also handle uploading the file to your server
        // uploadLogoToServer(file);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add useEffect to handle background loading
  useEffect(() => {
    const backgroundImage = new Image();
    const circleImage = new Image();
    const circleHoverImage = new Image();
    const hexagonImage = new Image();
    const hexagonHoverImage = new Image();
    backgroundImage.src = "/myschool/images/bg-admin.png";
    circleImage.src = "/myschool/images/circle.svg";
    circleHoverImage.src = "/myschool/images/circle-on.svg";
    hexagonImage.src = "/myschool/images/hexagon.svg";
    hexagonHoverImage.src = "/myschool/images/hexagon-on.svg";
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
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        opacity:
          isBackgroundLoaded &&
          isHexagonLoaded &&
          isCircleLoaded &&
          isCircleHoverLoaded
            ? 1
            : 0,
        // transition: "opacity 0.6s ease",
      }}
    >
      <div className={styles.exitContainer}>
        <Hexagon
          icon="/myschool/images/ic-exit.svg"
          hoverIcon="/myschool/images/ic-exit-on.svg"
          back="/myschool/images/hexagon.svg"
          backHover="/myschool/images/hexagon-on.svg"
          text="خروج"
          handleClick={() => navigate("/")}
        />
      </div>
      <div className={styles.userContainer}>
        <UserHexagon
          image="/myschool/images/user.png"
          stateIcon="/myschool/images/badge-green.svg"
          back="/myschool/images/hexagon.svg"
          backHover="/myschool/images/hexagon-on.svg"
          text="نعیمه"
        />
      </div>
      <div className={styles.notifContainer}>
        <Hexagon
          icon="/myschool/images/ic-notification.svg"
          hoverIcon="/myschool/images/ic-notification-on.svg"
          back="/myschool/images/hexagon.svg"
          backHover="/myschool/images/hexagon-on.svg"
          text="اعلان ها"
        />
      </div>
      <div className={styles.walContainer}>
        <Hexagon
          icon="/myschool/images/ic-wallet.svg"
          hoverIcon="/myschool/images/ic-wallet-on.svg"
          back="/myschool/images/hexagon.svg"
          backHover="/myschool/images/hexagon-on.svg"
          text="موجودی"
        />
      </div>
      <div className={styles.circle}>
        <img
          className={styles.schoolLogo}
          src="/myschool/images/school-logo.svg"
          alt=""
        />
        <img
          className={styles.editIcon}
          src="/myschool/images/ic-edit.svg"
          alt=""
          onClick={handleEditClick}
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="logo-picker"
          onChange={handleLogoChange}
        />
      </div>
      <p className={styles.title}>سیستم مدیریت مدرسه غیر انتفاعی طرح نو</p>
      <div className={styles.ayContainer}>
        <Hexagon
          icon="/myschool/images/ic-academic-year.svg"
          hoverIcon="/myschool/images/ic-academic-year-on.svg"
          back="/myschool/images/hexagon.svg"
          backHover="/myschool/images/hexagon-on.svg"
          text="سال تحصیلی"
          handleClick={() => navigate("/selectschool")}
        />
      </div>
      <div className={styles.miContainer}>
        <Hexagon
          icon="/myschool/images/ic-management-interface.svg"
          hoverIcon="/myschool/images/ic-management-interface-on.svg"
          back="/myschool/images/hexagon.svg"
          backHover="/myschool/images/hexagon-on.svg"
          text="رابط مدیریت"
        />
      </div>
      <div className={styles.spContainer}>
        <Hexagon
          icon="/myschool/images/ic-school-profile.svg"
          hoverIcon="/myschool/images/ic-school-profile-on.svg"
          back="/myschool/images/hexagon.svg"
          backHover="/myschool/images/hexagon-on.svg"
          text="پروفایل مدرسه"
          handleClick={() => navigate("/schoolregister")}
        />
      </div>
      <div className={styles.setsContainer}>
        <Hexagon
          icon="/myschool/images/ic-settings.svg"
          hoverIcon="/myschool/images/ic-settings-on.svg"
          back="/myschool/images/hexagon.svg"
          backHover="/myschool/images/hexagon-on.svg"
          text="تنظیمات"
        />
      </div>
      <div className={styles.supContainer}>
        <Hexagon
          icon="/myschool/images/ic-support.svg"
          hoverIcon="/myschool/images/ic-support-on.svg"
          back="/myschool/images/hexagon.svg"
          backHover="/myschool/images/hexagon-on.svg"
          text="پشتیبانی"
        />
      </div>
      <div className={styles.repContainer}>
        <Hexagon
          icon="/myschool/images/ic-reports.svg"
          hoverIcon="/myschool/images/ic-reports-on.svg"
          back="/myschool/images/hexagon.svg"
          backHover="/myschool/images/hexagon-on.svg"
          text="گزارشات"
        />
      </div>
      <div className={styles.optContainer}>
        <Hexagon
          icon="/myschool/images/ic-options.svg"
          hoverIcon="/myschool/images/ic-options-on.svg"
          back="/myschool/images/hexagon.svg"
          backHover="/myschool/images/hexagon-on.svg"
          text="آپشن"
        />
      </div>
    </div>
  );
};

export default Admin;

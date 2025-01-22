import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Admin.module.css";
import Hexagon from "./Hexagon";
import UserHexagon from "./UserHexagon";

const Admin = () => {
  const navigate = useNavigate();
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

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
        className={`${styles.hexagon} ${styles.exitContainer}`}
        onClick={() => navigate("/")}
      >
        <Hexagon icon="/myschool/images/ic-exit.svg" text="خروج" />
      </div>
      <div className={`${styles.hexagon} ${styles.userContainer}`}>
        <UserHexagon name="نعیمه" />
      </div>
      <div className={`${styles.hexagon} ${styles.notifContainer}`}>
        <Hexagon icon="/myschool/images/ic-notification.svg" text="اعلان ها" />
      </div>
      <div className={`${styles.hexagon} ${styles.walContainer}`}>
        <Hexagon icon="/myschool/images/ic-wallet.svg" text="موجودی" />
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
      <div
        className={`${styles.hexagon} ${styles.ayContainer}`}
        onClick={() => navigate("/selectschool")}
      >
        <Hexagon
          icon="/myschool/images/ic-academic-year.svg"
          text="سال تحصیلی"
        />
      </div>
      <div className={`${styles.hexagon} ${styles.miContainer}`}>
        <Hexagon
          icon="/myschool/images/ic-management-interface.svg"
          text="رابط مدیریت"
        />
      </div>
      <div className={`${styles.hexagon} ${styles.spContainer}`}>
        <Hexagon
          icon="/myschool/images/ic-school-profile.svg"
          text="پروفایل مدرسه"
        />
      </div>
      <div className={`${styles.hexagon} ${styles.setsContainer}`}>
        <Hexagon icon="/myschool/images/ic-settings.svg" text="تنظیمات" />
      </div>
      <div className={`${styles.hexagon} ${styles.supContainer}`}>
        <Hexagon icon="/myschool/images/ic-support.svg" text="پشتیبانی" />
      </div>
      <div className={`${styles.hexagon} ${styles.repContainer}`}>
        <Hexagon icon="/myschool/images/ic-reports.svg" text="گزارشات" />
      </div>
      <div className={`${styles.hexagon} ${styles.optContainer}`}>
        <Hexagon icon="/myschool/images/ic-options.svg" text="آپشن" />
      </div>
    </div>
  );
};

export default Admin;

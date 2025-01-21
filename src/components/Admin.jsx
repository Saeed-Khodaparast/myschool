import { useNavigate } from "react-router-dom";
import styles from "./Admin.module.css";
import exitIcon from "../assets/images/ic-exit.svg";
import notifIcon from "../assets/images/ic-notification.svg";
import walletIcon from "../assets/images/ic-wallet.svg";
import editIcon from "../assets/images/ic-edit.svg";
import ayIcon from "../assets/images/ic-academic-year.svg";
import miIcon from "../assets/images/ic-management-interface.svg";
import spIcon from "../assets/images/ic-school-profile.svg";
import setsIcon from "../assets/images/ic-settings.svg";
import supIcon from "../assets/images/ic-support.svg";
import repIcon from "../assets/images/ic-reports.svg";
import optIcon from "../assets/images/ic-options.svg";
import Hexagon from "./Hexagon";
import UserHexagon from "./UserHexagon";

const Admin = () => {
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

  return (
    <div className={styles.container}>
      <div
        className={`${styles.hexagon} ${styles.exitContainer}`}
        onClick={() => navigate("/")}
      >
        <Hexagon icon={exitIcon} text="خروج" />
      </div>
      <div className={`${styles.hexagon} ${styles.userContainer}`}>
        <UserHexagon name="نعیمه" />
      </div>
      <div className={`${styles.hexagon} ${styles.notifContainer}`}>
        <Hexagon icon={notifIcon} text="اعلان ها" />
      </div>
      <div className={`${styles.hexagon} ${styles.walContainer}`}>
        <Hexagon icon={walletIcon} text="موجودی" />
      </div>
      <div className={styles.circle}>
        <img
          className={styles.schoolLogo}
          src="/images/school-logo.svg"
          alt=""
        />
        <img
          className={styles.editIcon}
          src={editIcon}
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
      <div className={`${styles.hexagon} ${styles.ayContainer}`}>
        <Hexagon icon={ayIcon} text="سال تحصیلی" />
      </div>
      <div className={`${styles.hexagon} ${styles.miContainer}`}>
        <Hexagon icon={miIcon} text="رابط مدیریت" />
      </div>
      <div className={`${styles.hexagon} ${styles.spContainer}`}>
        <Hexagon icon={spIcon} text="پروفایل مدرسه" />
      </div>
      <div className={`${styles.hexagon} ${styles.setsContainer}`}>
        <Hexagon icon={setsIcon} text="تنظیمات" />
      </div>
      <div className={`${styles.hexagon} ${styles.supContainer}`}>
        <Hexagon icon={supIcon} text="پشتیبانی" />
      </div>
      <div className={`${styles.hexagon} ${styles.repContainer}`}>
        <Hexagon icon={repIcon} text="گزارشات" />
      </div>
      <div className={`${styles.hexagon} ${styles.optContainer}`}>
        <Hexagon icon={optIcon} text="آپشن" />
      </div>
    </div>
  );
};

export default Admin;

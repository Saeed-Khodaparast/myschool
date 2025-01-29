import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./AcademicYear.module.css";
import { useState } from "react";
import Modal from "./Modal";

const AcademicYear = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { gender, shift } = useParams();

  const handleAddBtn = () => {
    // setShowModal(!showModal);
  };

  return (
    <>
      <div
        className={`${styles.dimBackground} ${showModal && styles.open}`}
        onClick={handleAddBtn}
      ></div>
      <div className={styles.container}>
        <div className={styles.sideBar}>
          <img
            className={styles.returnBtn}
            src="/myschool/images/ic-arrow-right.svg"
            alt=""
            onClick={() => navigate(`/selectshift/${gender}`)}
          />
        </div>
        <div className={styles.content}>
          <img
            className={styles.image}
            src="/myschool/images/school.svg"
            alt=""
          />
          <p className={styles.title}>
            {" "}
            {gender === "boy"
              ? shift === "morning"
                ? "متاسفیم، تاکنون سال تحصیلی در مدرسه پسرانه طرح نو شیفت صبح، اضافه نشده است."
                : "متاسفیم، تاکنون سال تحصیلی در مدرسه پسرانه طرح نو شیفت عصر، اضافه نشده است."
              : shift === "morning"
              ? "متاسفیم، تاکنون سال تحصیلی در مدرسه دخترانه طرح نو شیفت صبح، اضافه نشده است."
              : "متاسفیم، تاکنون سال تحصیلی در مدرسه دخترانه طرح نو شیفت عصر، اضافه نشده است."}
          </p>
          <button className={styles.addBtn} onClick={handleAddBtn}>
            افزودن سال تحصیلی
          </button>

          <div className={`${styles.modal} ${showModal && styles.open}`}>
            <Modal handleReturnClick={handleAddBtn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicYear;

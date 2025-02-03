import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./EducationalLevel.module.css";
import { useState, useEffect } from "react";
import Modal from "./Modal";

// const sampleData = [
//   {
//     id: 1,
//     title: "1404-1405",
//     status: "فعال",
//     startDate: "1404/07/01",
//     endDate: "1405/06/30",
//     registerStartDate: "1404/07/01",
//     registerEndDate: "1404/07/30",
//     registrationLimit: "100",
//     registered: "0",
//     remainRegister: "100",
//     createdAt: "1404/07/01 12:00:00",
//     updatedAt: "1404/07/01 12:00:00",
//     actions: "actions",
//   },
//   {
//     id: 1,
//     title: "1404-1405",
//     status: "فعال",
//     startDate: "1404/07/01",
//     endDate: "1405/06/30",
//     registerStartDate: "1404/07/01",
//     registerEndDate: "1404/07/30",
//     registrationLimit: "100",
//     registered: "00",
//     remainRegister: "100",
//     createdAt: "1404/07/01 12:00:00",
//     updatedAt: "1404/07/01 12:00:00",
//     actions: "actions",
//   },
//   {
//     id: 1,
//     title: "1404-1405",
//     status: "فعال",
//     startDate: "1404/07/01",
//     endDate: "1405/06/30",
//     registerStartDate: "1404/07/01",
//     registerEndDate: "1404/07/30",
//     registrationLimit: "100",
//     registered: "00",
//     remainRegister: "100",
//     createdAt: "1404/07/01 12:00:00",
//     updatedAt: "1404/07/01 12:00:00",
//     actions: "actions",
//   },
//   {
//     id: 1,
//     title: "1404-1405",
//     status: "فعال",
//     startDate: "1404/07/01",
//     endDate: "1405/06/30",
//     registerStartDate: "1404/07/01",
//     registerEndDate: "1404/07/30",
//     registrationLimit: "100",
//     registered: "00",
//     remainRegister: "100",
//     createdAt: "1404/07/01 12:00:00",
//     updatedAt: "1404/07/01 12:00:00",
//     actions: "actions",
//   },
//   {
//     id: 1,
//     title: "1404-1405",
//     status: "فعال",
//     startDate: "1404/07/01",
//     endDate: "1405/06/30",
//     registerStartDate: "1404/07/01",
//     registerEndDate: "1404/07/30",
//     registrationLimit: "100",
//     registered: "00",
//     remainRegister: "100",
//     createdAt: "1404/07/01 12:00:00",
//     updatedAt: "1404/07/01 12:00:00",
//     actions: "actions",
//   },
//   {
//     id: 1,
//     title: "1404-1405",
//     status: "فعال",
//     startDate: "1404/07/01",
//     endDate: "1405/06/30",
//     registerStartDate: "1404/07/01",
//     registerEndDate: "1404/07/30",
//     registrationLimit: "100",
//     registered: "00",
//     remainRegister: "100",
//     createdAt: "1404/07/01 12:00:00",
//     updatedAt: "1404/07/01 12:00:00",
//     actions: "actions",
//   },
//   {
//     id: 1,
//     title: "1404-1405",
//     status: "فعال",
//     startDate: "1404/07/01",
//     endDate: "1405/06/30",
//     registerStartDate: "1404/07/01",
//     registerEndDate: "1404/07/30",
//     registrationLimit: "100",
//     registered: "00",
//     remainRegister: "100",
//     createdAt: "1404/07/01 12:00:00",
//     updatedAt: "1404/07/01 12:00:00",
//     actions: "actions",
//   },
//   {
//     id: 1,
//     title: "1404-1405",
//     status: "فعال",
//     startDate: "1404/07/01",
//     endDate: "1405/06/30",
//     registerStartDate: "1404/07/01",
//     registerEndDate: "1404/07/30",
//     registrationLimit: "100",
//     registered: "00",
//     remainRegister: "100",
//     createdAt: "1404/07/01 12:00:00",
//     updatedAt: "1404/07/01 12:00:00",
//     actions: "actions",
//   },
//   {
//     id: 1,
//     title: "1404-1405",
//     status: "فعال",
//     startDate: "1404/07/01",
//     endDate: "1405/06/30",
//     registerStartDate: "1404/07/01",
//     registerEndDate: "1404/07/30",
//     registrationLimit: "100",
//     registered: "00",
//     remainRegister: "100",
//     createdAt: "1404/07/01 12:00:00",
//     updatedAt: "1404/07/01 12:00:00",
//     actions: "actions",
//   },
//   {
//     id: 1,
//     title: "1404-1405",
//     status: "فعال",
//     startDate: "1404/07/01",
//     endDate: "1405/06/30",
//     registerStartDate: "1404/07/01",
//     registerEndDate: "1404/07/30",
//     registrationLimit: "100",
//     registered: "0",
//     remainRegister: "100",
//     createdAt: "1404/07/01 12:00:00",
//     updatedAt: "1404/07/01 12:00:00",
//     actions: "actions",
//   },
// ];

const EducationalLevel = () => {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();
  const { gender, shift, level } = useParams();

  const labels = [
    "شناسه مقطع تحصیلی",
    "نام مقطع تحصیلی",
    "وضعیت مقطع تحصیلی",
    "ظرفیت ثبت نام",
    "ثبت نام شدگان",
    "ظرفیت باقی مانده",
    "تاریخ و زمان تعریف",
    "تاریخ و زمان ویرایش",
    "عملیات",
  ];

  // Add useEffect to handle background loading
  useEffect(() => {
    const image = new Image();
    image.src = "/myschool/images/school.svg";
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  const handleAddBtn = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div
        className={`${styles.dimBackground} ${showModal && styles.open}`}
        onClick={handleAddBtn}
      ></div>
      <div
        className={styles.container}
        style={{ opacity: isImageLoaded ? 1 : 0 }}
      >
        <div className={styles.sideBar}>
          <img
            className={styles.returnBtn}
            src="/myschool/images/ic-arrow-right.svg"
            alt=""
            onClick={() => navigate(`/academicyear/${gender}/${shift}`)}
          />
        </div>
        <div className={styles.content}>
          {items.length === 0 ? (
            <div className={styles.emptyState}>
              <img
                className={styles.image}
                src="/myschool/images/school.svg"
                alt=""
              />
              <p className={styles.title}>
                {"متاسفیم، تاکنون مقطع تحصیلی در مدرسه شما اضافه نشده است."}
              </p>
              <button className={styles.addBtn} onClick={handleAddBtn}>
                افزودن مقطع تحصیلی
              </button>
            </div>
          ) : (
            <div className={styles.container}>
              <div className={styles.header}>
                <p className={styles.title}>مدیریت مقطع تحصیلی</p>
                <img
                  className={styles.filter}
                  src="/myschool/images/ic-filter.svg"
                  alt=""
                />
                <div className={styles.inputContainer}>
                  <img
                    className={styles.searchIcon}
                    src="/myschool/images/ic-search.svg"
                    alt=""
                  />
                  <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="جستجو در مقطع تحصیلی"
                  />
                </div>
              </div>
              <div className={styles.list}>
                <ul className={styles.labels}>
                  {labels.map((label, index) => (
                    <li className={styles.label} key={index}>
                      {label}
                    </li>
                  ))}
                </ul>
                <ul className={styles.items}>
                  {items.map((item, index) => (
                    <li className={styles.item} key={index}>
                      {Object.entries(item).map(([key, value]) => (
                        <li className={styles.subItem} key={key}>
                          {value}
                        </li>
                      ))}
                    </li>
                  ))}
                </ul>
                <img
                  className={styles.roundAddBtn}
                  src="/myschool/images/ic-add-academic-year.svg"
                  alt=""
                  onClick={handleAddBtn}
                />
              </div>
            </div>
          )}

          <div className={`${styles.modal} ${showModal && styles.open}`}>
            <Modal
              type="level"
              items={items}
              setItems={setItems}
              handleReturnClick={handleAddBtn}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationalLevel;

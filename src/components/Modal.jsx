import styles from "./Modal.module.css";
import { useState } from "react";

const Modal = ({ handleAddClick, handleReturnClick }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>افزودن سال تحصیلی جدید</p>
        <button className={styles.addBtn} onClick={handleAddClick}>
          ثبت
        </button>
        <button className={styles.returnBtn} onClick={handleReturnClick}>
          بازگشت
        </button>
      </div>
      <div className={styles.body}>
        <div className={styles.yearTitle}>
          <p className={styles.title}>عنوان سال تحصیلی</p>
          <input
            type="text"
            className={styles.input}
            placeholder="عنوان سال تحصیلی را به صورت دقیق وارد کنید"
          />
        </div>

        <div className={styles.yearStatus}>
          <p className={styles.title}>وضعیت سال تحصیلی :</p>
          <select
            name="option"
            className={`${styles.input} ${isSelectOpen ? styles.open : ""}`}
            onClick={() => setIsSelectOpen(!isSelectOpen)}
            onBlur={() => setIsSelectOpen(false)}
          >
            <option value="option1">انتخاب کنید</option>
            <option value="option2">آیتم</option>
            <option value="option3">آیتم</option>
            <option value="option4">آیتم</option>
          </select>
        </div>

        <div>
          <p id="startDate" class="regularFont16">
            تاریخ شروع سال تحصیلی
          </p>
          <p id="endDate" class="regularFont16">
            تاریخ پایان سال تحصیلی
          </p>

          <input
            type="text"
            id="startChoos"
            class="datepicker inputStyle box regularFont14"
            placeholder="تاریخ شروع سال تحصیلی را به صورت دقیق وارد کنید"
          />
          <input
            type="text"
            id="endChoos"
            class="datepicker inputStyle box regularFont14"
            placeholder="تاریخ پایان سال تحصیلی را به صورت دقیق وارد کنید"
          />
        </div>

        <div>
          <p id="startRegister" class="regularFont16">
            تاریخ شروع ثبت نام
          </p>
          <p id="endRegister" class="regularFont16">
            تاریخ پایان ثبت نام
          </p>

          <input
            type="text"
            id="startChoosRegister"
            class="datepicker inputStyle regularFont14 box"
            placeholder="تاریخ شروع سال تحصیلی را به صورت دقیق وارد کنید"
          />
          <input
            type="text"
            id="endChoosRegister"
            class="datepicker inputStyle regularFont14 box"
            placeholder="تاریخ پایان سال تحصیلی را به صورت دقیق وارد کنید"
          />
        </div>

        <div>
          <p id="limitText" class="regularFont16">
            ظرفیت ثبت نام دانش آموزان
          </p>
          <p id="limitInformation">
            برای اعلام عدم محدودیت در ظرفیت ثبت‌نام سال تحصیلی، این فیلد را خالی
            بگذارید
          </p>

          <input
            type="number"
            min="0"
            id="limit"
            class="inputStyle box"
            placeholder="تاریخ شروع سال تحصیلی را به صورت دقیق وارد کنید"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;

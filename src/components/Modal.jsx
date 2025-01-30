import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styles from "./Modal.module.css";
import { DateObject } from "react-multi-date-picker";

const Modal = ({ handleReturnClick }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [startDate, setStartDate] = useState(
    new DateObject({ calendar: persian, locale: persian_fa })
  );
  const [endDate, setEndDate] = useState(
    new DateObject({ calendar: persian, locale: persian_fa }).add(1, "year")
  );
  const [registerStartDate, setRegisterStartDate] = useState(
    new DateObject({ calendar: persian, locale: persian_fa })
  );
  const [registerEndDate, setRegisterEndDate] = useState(
    new DateObject({ calendar: persian, locale: persian_fa })
  );
  const [yearTitle, setYearTitle] = useState("");
  const [registrationLimit, setRegistrationLimit] = useState("");
  const [yearStatus, setYearStatus] = useState("option1");

  const resetModal = () => {
    setIsSelectOpen(false);
    setStartDate(new DateObject({ calendar: persian, locale: persian_fa }));
    setEndDate(
      new DateObject({ calendar: persian, locale: persian_fa }).add(1, "year")
    );
    setRegisterStartDate(
      new DateObject({ calendar: persian, locale: persian_fa })
    );
    setRegisterEndDate(
      new DateObject({ calendar: persian, locale: persian_fa })
    );
    setYearTitle("");
    setRegistrationLimit("");
    setYearStatus("option1");
  };

  const CustomInput = ({ openCalendar, value, handleValueChange }) => {
    return (
      <input
        className={styles.input}
        value={value}
        onChange={handleValueChange}
        onClick={openCalendar}
        readOnly // Make it read-only to prevent direct text input
      />
    );
  };

  const handleReturn = () => {
    resetModal();
    handleReturnClick();
  };

  const handleSubmit = () => {
    // Convert dates to the format you need
    const formData = {
      startDate: startDate?.format("YYYY/MM/DD"),
      endDate: endDate?.format("YYYY/MM/DD"),
      startDateMillis: startDate?.unix * 1000,
      endDateMillis: endDate?.unix * 1000,
      registerStartDate: registerStartDate?.format("YYYY/MM/DD"),
      registerEndDate: registerEndDate?.format("YYYY/MM/DD"),
      registerStartDateMillis: registerStartDate?.unix * 1000,
      registerEndDateMillis: registerEndDate?.unix * 1000,
    };

    console.log(formData);
    handleReturn();
  };

  // Add validation
  const handleDateChange = (date, setDate) => {
    if (!date) return;
    setDate(date);
    // Create new DateObject instances for conversions
    const gregorianDate = new DateObject({
      date: date.toDate(), // Convert to JavaScript Date first
      calendar: "gregorian",
    });

    // Get different formats
    console.log("Persian date:", date.format("YYYY/MM/DD"));
    console.log("Gregorian date:", gregorianDate.format("YYYY/MM/DD"));

    // If you need JavaScript Date object
    console.log("JavaScript Date:", date.toDate());

    // If you need timestamps
    console.log("Timestamp:", date.unix * 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>افزودن سال تحصیلی جدید</p>
        <button onClick={handleSubmit} className={styles.addBtn}>
          ثبت
        </button>
        <button className={styles.returnBtn} onClick={handleReturn}>
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
            value={yearTitle}
            onChange={(e) => setYearTitle(e.target.value)}
          />
        </div>

        <div className={styles.yearStatus}>
          <p className={styles.title}>وضعیت سال تحصیلی :</p>
          <select
            name="option"
            className={`${styles.input} ${isSelectOpen ? styles.open : ""}`}
            onClick={() => setIsSelectOpen(!isSelectOpen)}
            onBlur={() => setIsSelectOpen(false)}
            value={yearStatus}
            onChange={(e) => setYearStatus(e.target.value)}
          >
            <option value="option1">انتخاب کنید</option>
            <option value="option2">آیتم</option>
            <option value="option3">آیتم</option>
            <option value="option4">آیتم</option>
          </select>
        </div>

        <div className={styles.startEndYear}>
          <div className={styles.startDate}>
            <p className={styles.title}>تاریخ شروع سال تحصیلی</p>
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              value={startDate}
              onChange={(date) => handleDateChange(date, setStartDate)}
              render={<CustomInput />}
              calendarPosition="bottom-right"
              inputClass={styles.input}
            />
          </div>

          <div className={styles.endDate}>
            <p className={styles.title}>تاریخ پایان سال تحصیلی</p>
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              value={endDate}
              onChange={(date) => handleDateChange(date, setEndDate)}
              format="YYYY/MM/DD"
              render={<CustomInput />}
              calendarPosition="bottom-right"
              inputClass={styles.input}
              minDate={startDate}
            />
          </div>
        </div>

        <div className={styles.startEndRegister}>
          <div className={styles.startRegister}>
            <p className={styles.title}>تاریخ شروع ثبت نام</p>
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              value={registerStartDate}
              onChange={(date) => handleDateChange(date, setRegisterStartDate)}
              render={<CustomInput />}
              calendarPosition="bottom-right"
              inputClass={styles.input}
            />
          </div>

          <div className={styles.endRegister}>
            <p className={styles.title}>تاریخ پایان ثبت نام</p>
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              value={registerEndDate}
              onChange={(date) => handleDateChange(date, setRegisterEndDate)}
              render={<CustomInput />}
              calendarPosition="bottom-right"
              inputClass={styles.input}
              minDate={registerStartDate}
            />
          </div>
        </div>

        <div className={styles.registerLimit}>
          <p className={styles.title}>ظرفیت ثبت نام دانش آموزان</p>

          <input
            type="number"
            min="0"
            className={styles.input}
            placeholder="تاریخ شروع سال تحصیلی را به صورت دقیق وارد کنید"
            value={registrationLimit}
            onChange={(e) => setRegistrationLimit(e.target.value)}
          />
          <p className={styles.information}>
            برای اعلام عدم محدودیت در ظرفیت ثبت نام سال تحصیلی، این فیلد را خالی
            بگذارید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

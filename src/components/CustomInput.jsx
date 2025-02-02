import styles from "./CustomInput.module.css";

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

export default CustomInput;

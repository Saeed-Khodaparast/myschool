import { useState, useRef } from "react";
import styles from "./VerificationInput.module.css";

const VerificationInput = () => {
  const [values, setValues] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleInput = (index, event) => {
    const value = event.target.value;

    // Only accept numbers
    if (!/^\d*$/.test(value)) {
      return;
    }

    // Update the values array
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    // Move to next input if value exists and not last input
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    // Handle backspace
    if (event.key === "Backspace") {
      // If current input is empty and not first input, move to previous
      if (!values[index] && index > 0) {
        inputRefs.current[index - 1].focus();

        // Clear the previous input
        const newValues = [...values];
        newValues[index - 1] = "";
        setValues(newValues);
      }

      // If current input has value, clear it
      if (values[index]) {
        const newValues = [...values];
        newValues[index] = "";
        setValues(newValues);
      }
    }

    // Handle left arrow
    if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    // Handle right arrow
    if (event.key === "ArrowRight" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle paste functionality
  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("text");

    // Only accept numbers
    if (!/^\d+$/.test(pastedData)) {
      return;
    }

    const pastedArray = pastedData.split("").slice(0, 6);
    const newValues = [...values];

    pastedArray.forEach((value, index) => {
      if (index < 6) {
        newValues[index] = value;
      }
    });

    setValues(newValues);

    // Focus the next empty input or the last input
    const nextEmptyIndex = newValues.findIndex((value) => !value);
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex].focus();
    } else {
      inputRefs.current[5].focus();
    }
  };

  return (
    <div className={styles.container}>
      {Array.from({ length: 6 }, (_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength={1}
          value={values[index]}
          onChange={(e) => handleInput(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className={styles.input}
        />
      ))}
    </div>
  );
};

export default VerificationInput;

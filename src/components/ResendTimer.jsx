import { useState, useEffect } from "react";
import styles from "./ResendTimer.module.css";

const ResendTimer = ({ initialTime = 90, onResend }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timeLeft, isActive]);

  const handleResend = () => {
    if (!isActive) {
      onResend();
      setTimeLeft(initialTime);
      setIsActive(true);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className={styles.container}>
      {isActive ? (
        <span className={styles.resendTimer}>
          مدت اعتبار کد {formatTime(timeLeft)}
        </span>
      ) : (
        <span className={styles.resendBtn} onClick={handleResend}>
          ارسال مجدد کد
        </span>
      )}
    </div>
  );
};

export default ResendTimer;

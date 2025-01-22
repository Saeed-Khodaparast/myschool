import styles from "./LoginConfirm.module.css";
import { useEffect, useState, useRef } from "react";
import VerificationInput from "./VerificationInput";
import ResendTimer from "./ResendTimer";
import { useNavigate } from "react-router-dom";

const LoginConfirm = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRefs = useRef([]);
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const navigate = useNavigate();

  // Add useEffect to handle background loading
  useEffect(() => {
    const img = new Image();
    img.src = "/myschool/images/bg-login.png"; // Replace with your actual background image URL
    img.onload = () => {
      setIsBackgroundLoaded(true);
    };
  }, []);

  const handleReturn = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // useEffect(() => {
  //   inputRefs.current.forEach((input, index) => {
  //     if (!input) return;

  //     const handleInput = (e) => {
  //       if (e.target.value && index < inputRefs.current.length - 1) {
  //         inputRefs.current[index + 1].focus();
  //       }
  //     };

  //     const handleKeyDown = (e) => {
  //       if (e.key === "Backspace" && index > 0 && !e.target.value) {
  //         inputRefs.current[index - 1].focus();
  //       }
  //     };

  //     input.addEventListener("input", handleInput);
  //     input.addEventListener("keydown", handleKeyDown);

  //     return () => {
  //       input.removeEventListener("input", handleInput);
  //       input.removeEventListener("keydown", handleKeyDown);
  //     };
  //   });
  // }, []);

  // Automatically focus on the next input field
  // const inputs = document.querySelectorAll(".input");
  // inputs.forEach((input, index) => {
  //   input.addEventListener("input", (e) => {
  //     if (e.target.value && index < inputs.length - 1) {
  //       inputs[index + 1].focus();
  //     }
  //   });

  //   input.addEventListener("keydown", (e) => {
  //     if (e.key === "Backspace" && index > 0 && !e.target.value) {
  //       inputs[index - 1].focus();
  //     }
  //   });
  // });

  function resendCode() {
    alert("کد جدید ارسال شد!");
  }

  return (
    <div
      className={styles.container}
      style={{
        opacity: isBackgroundLoaded ? 1 : 0,
        // transition: "opacity 0.6s ease",
      }}
    >
      <img className={styles.logo} src="/myschool/images/logo.svg" alt="" />
      <main className={styles.content}>
        <img
          className={styles.topImage}
          src="/myschool/images/ic-loginConfirm.svg"
          alt=""
        />
        <p className={styles.title}>
          پیامکی حاوی کد اعتبارسنجی را به شماره تلفن
          <span className={styles.phoneNumber}>09198863479</span>
          ارسال کرده ایم.
        </p>
        <VerificationInput />
        <ResendTimer
          initialTime={10}
          onResend={() => {
            // Your resend logic here
            resendCode();
          }}
          className={styles.resendTimer}
        />
        <button className={styles.button} onClick={() => navigate("/admin")}>
          ورود
        </button>
        <button className={styles.returnBtn} onClick={handleReturn}>
          بازگشت
        </button>
      </main>
    </div>
  );
};

export default LoginConfirm;

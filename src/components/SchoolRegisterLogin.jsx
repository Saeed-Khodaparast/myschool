import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./SchoolRegisterLogin.module.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";

const SchoolRegisterLogin = () => {
  const [nationalCode, setNationalCode] = useState("");
  const [birthDate, setBirthDate] = useState(
    new DateObject({ calendar: persian, locale: persian_fa }).format(
      "YYYY/MM/DD"
    )
  );
  const [error, setError] = useState("");
  const [ageError, setAgeError] = useState(true);
  const [userError, setUserError] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [isLoginIconLoaded, setIsLoginIconLoaded] = useState(false);
  const [isNoUserIconLoaded, setIsNoUserIconLoaded] = useState(false);
  const [isAgeIconLoaded, setIsAgeIconLoaded] = useState(false);
  const navigate = useNavigate();

  // Add useEffect to handle background loading
  useEffect(() => {
    const backgroundImage = new Image();
    const logoImage = new Image();
    const loginIconImage = new Image();
    const noUserIconImage = new Image();
    const ageIconImage = new Image();
    backgroundImage.src = "/myschool/images/bg-login.png";
    logoImage.src = "/myschool/images/logo.svg";
    loginIconImage.src = "/myschool/images/ic-login.svg";
    noUserIconImage.src = "/myschool/images/ic-error-nouser.svg";
    ageIconImage.src = "/myschool/images/ic-error-age.svg";
    backgroundImage.onload = () => {
      setIsBackgroundLoaded(true);
    };
    logoImage.onload = () => {
      setIsLogoLoaded(true);
    };
    loginIconImage.onload = () => {
      setIsLoginIconLoaded(true);
    };
    noUserIconImage.onload = () => {
      setIsNoUserIconLoaded(true);
    };
    ageIconImage.onload = () => {
      setIsAgeIconLoaded(true);
    };
  }, []);

  const clearInput = (field) => {
    if (field === "nationalCode") {
      setNationalCode("");
    } else if (field === "birthDate") {
      setBirthDate(new DateObject({ calendar: persian, locale: persian_fa }));
    }
  };

  const showTemporaryError = (message) => {
    setError(message);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    navigate("/schoolregister/confirmation");
  };

  const handleNationalCodeChange = (e) => {
    // Remove any non-numeric characters
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setNationalCode(numericValue);
  };

  const handBirthDateChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setBirthDate(numericValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    navigate("/schoolregister/confirmation");

    // Validate inputs
    if (!nationalCode || !birthDate) {
      alert("Please fill in all fields");
      return;
    }

    // Here you can add your login logic
    console.log("Form submitted:", { nationalCode, birthDate });

    // if (user.trim() === USER_NAME && pass.trim() === PASSWORD) {
    //   navigate("/confirmation");
    //   return;
    // }

    // Replace with your actual API endpoint
    // fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username: user, password: pass }),
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (data.success) {
    //       // Handle successful login
    //       // For example, redirect to dashboard
    //       // navigate('/dashboard');
    //     } else {
    //       // Handle login failure
    //       alert("Login failed: " + data.message);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Login error:", error);
    //     alert("An error occurred during login");
    //   });
  };

  return (
    <>
      {userError && ageError && (
        <div
          className={styles.container}
          style={{
            opacity:
              isBackgroundLoaded &&
              isLogoLoaded &&
              isLoginIconLoaded &&
              isNoUserIconLoaded &&
              isAgeIconLoaded
                ? 1
                : 0,
          }}
        >
          <img className={styles.logo} src="/myschool/images/logo.svg" alt="" />
          <img
            className={`${styles.topImage} ${styles.error}`}
            src="/myschool/images/ic-error-nouser.svg"
            alt=""
          />
          <h1 className={`${styles.title} ${styles.error}`}>
            اطلاعات شما در مدرسه من یافت نشد!!!
          </h1>

          <p className={styles.errorDescription}>
            برای ورود و دسترسی به سیستم ثبت نام مدارس بایستی در مرحله اول در
            اپلیکشن مدرسه من ثبت نام نموده و سپس اقدام نمایید.
          </p>

          <button
            className={styles.button}
            onClick={() => setUserError(!userError)}
          >
            متوجه شدم
          </button>
        </div>
      )}

      {userError && !ageError && (
        <div
          className={styles.container}
          style={{
            opacity: isBackgroundLoaded ? 1 : 0,
          }}
        >
          <img className={styles.logo} src="/myschool/images/logo.svg" alt="" />
          <img
            className={`${styles.topImage} ${styles.error}`}
            src="/myschool/images/ic-error-nouser.svg"
            alt=""
          />
          <h1 className={`${styles.title} ${styles.error}`}>
            اطلاعات شما در مدرسه من یافت نشد!!!
          </h1>

          <p className={styles.errorDescription}>
            برای ورود و دسترسی به سیستم ثبت نام مدارس بایستی در مرحله اول در
            اپلیکشن مدرسه من ثبت نام نموده و سپس اقدام نمایید.
          </p>

          <button
            className={styles.button}
            onClick={() => setUserError(!userError)}
          >
            متوجه شدم
          </button>
        </div>
      )}

      {ageError && !userError && (
        <div
          className={styles.container}
          style={{
            opacity: isBackgroundLoaded ? 1 : 0,
          }}
        >
          <img className={styles.logo} src="/myschool/images/logo.svg" alt="" />
          <img
            className={`${styles.topImage} ${styles.error}`}
            src="/myschool/images/ic-error-age.svg"
            alt=""
          />
          <h1 className={`${styles.title} ${styles.error}`}>
            سن شما کمتر از سن قانونی می باشد!!!
          </h1>
          <p className={styles.errorDescription}>
            متاسفانه شما نمی توانید قبل از سن قانونی (18 سال) وارد سیستم ثبت نام
            مدارس شوید.
          </p>
          <button
            className={styles.button}
            onClick={() => setAgeError(!ageError)}
          >
            متوجه شدم
          </button>
        </div>
      )}

      {!ageError && !userError && (
        <div
          className={styles.container}
          style={{
            opacity: isBackgroundLoaded ? 1 : 0,
          }}
        >
          <img className={styles.logo} src="/myschool/images/logo.svg" alt="" />
          <img
            className={styles.topImage}
            src="/myschool/images/ic-login.svg"
            alt=""
          />
          <h1 className={styles.title}>ورود به سیستم ثبت نام مدارس</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <input
                className={`${styles.input} ${styles.user}`}
                type="text"
                placeholder="کد ملی"
                title=""
                spellCheck="false"
                value={nationalCode}
                onInvalid={(e) => {
                  e.preventDefault();
                  showTemporaryError("ورود این فیلد اجباری است");
                }}
                onChange={handleNationalCodeChange}
                required
              />
              {nationalCode && nationalCode.trim() !== "" && (
                <img
                  className={`${styles.icon} ${styles.userIcon}`}
                  src="/myschool/images/ic-close.svg"
                  alt=""
                  onClick={() => clearInput("nationalCode")}
                />
              )}
              <span
                className={`${styles.nationalCodeTitle} ${
                  nationalCode ? styles.filled : ""
                }`}
              >
                کد ملی
              </span>
            </div>
            <span
              className={`${styles.errorMessage} ${
                isVisible ? styles.show : styles.hide
              }`}
            >
              {error}
            </span>
            <div className={styles.inputContainer}>
              <input
                className={`${styles.input} ${styles.pass}`}
                type="text"
                placeholder="تاریخ تولد"
                title=""
                spellCheck="false"
                value={birthDate}
                onInvalid={(e) => {
                  e.preventDefault();
                  showTemporaryError("ورود این فیلد اجباری است");
                }}
                onChange={handBirthDateChange}
                required
              />
              <span
                className={`${styles.birthDateTitle} ${
                  birthDate ? styles.filled : ""
                }`}
              >
                تاریخ تولد
              </span>
            </div>
            <div className={styles.subInputContainer}>
              <span
                className={`${styles.errorMessage} ${
                  isVisible ? styles.show : styles.hide
                }`}
              >
                {error}
              </span>
            </div>

            <button className={styles.button} type="submit">
              ادامه
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default SchoolRegisterLogin;

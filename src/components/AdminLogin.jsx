import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./AdminLogin.module.css";

const AdminLogin = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [isTopIconLoaded, setIsTopIconLoaded] = useState(false);
  const navigate = useNavigate();

  const USER_NAME = "admin";
  const PASSWORD = "admin";

  // Add useEffect to handle background loading
  useEffect(() => {
    const backgroundImage = new Image();
    const logoImage = new Image();
    const topIconImage = new Image();
    backgroundImage.src = "/myschool/images/bg-login.png";
    logoImage.src = "/myschool/images/logo.svg";
    topIconImage.src = "/myschool/images/ic-login.svg";
    backgroundImage.onload = () => {
      setIsBackgroundLoaded(true);
    };
    logoImage.onload = () => {
      setIsLogoLoaded(true);
    };
    topIconImage.onload = () => {
      setIsTopIconLoaded(true);
    };
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clearInput = (field) => {
    if (field === "username") {
      setUser("");
    } else if (field === "password") {
      setPass("");
    }
  };

  const showTemporaryError = (message) => {
    setError(message);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    navigate("/confirmation");
  };

  const handleUserChange = (e) => {
    e.target.value = e.target.value.trim();
    setUser(e.target.value);
  };

  const handPassChange = (e) => {
    e.target.value = e.target.value.trim();
    setPass(e.target.value);
  };

  const handleForgetPassword = () => {};

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    navigate("/confirmation");

    // Validate inputs
    if (!user || !pass) {
      alert("Please fill in all fields");
      return;
    }

    // Here you can add your login logic
    console.log("Form submitted:", { user, pass });

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
    <div
      className={styles.container}
      style={{
        opacity: isBackgroundLoaded && isLogoLoaded && isTopIconLoaded ? 1 : 0,
      }}
    >
      <img className={styles.logo} src="/myschool/images/logo.svg" alt="" />
      <img
        className={styles.topImage}
        src="/myschool/images/ic-login.svg"
        alt=""
      />
      <h1 className={styles.title}>ورود به سیستم مدیریت مدارس</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={`${styles.input} ${styles.user}`}
            type="text"
            placeholder="نام کاربری"
            title=""
            spellCheck="false"
            value={user}
            onInvalid={(e) => {
              e.preventDefault();
              showTemporaryError("ورود این فیلد اجباری است");
            }}
            onChange={handleUserChange}
            required
          />{" "}
          {user && user.trim() !== "" && (
            <img
              className={`${styles.icon} ${styles.userIcon}`}
              src="/myschool/images/ic-close.svg"
              alt=""
              onClick={() => clearInput("username")}
            />
          )}
          <span className={`${styles.userTitle} ${user ? styles.filled : ""}`}>
            نام کاربری
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
            type={showPassword ? "text" : "password"}
            placeholder="رمز عبور"
            title=""
            spellCheck="false"
            value={pass}
            onInvalid={(e) => {
              e.preventDefault();
              showTemporaryError("ورود این فیلد اجباری است");
            }}
            onChange={handPassChange}
            required
          />
          {pass && (
            <img
              className={`${styles.icon} ${styles.passIcon}`}
              src={
                showPassword
                  ? "/myschool/images/ic-eye-close.svg"
                  : "/myschool/images/ic-eye.svg"
              }
              alt=""
              onClick={togglePasswordVisibility}
            />
          )}
          <span className={`${styles.passTitle} ${pass ? styles.filled : ""}`}>
            رمز عبور
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
          <span className={styles.forgetPass} onClick={handleForgetPassword}>
            رمز عبور را فراموش کرده اید؟
          </span>
        </div>

        <button className={styles.button} type="submit">
          ادامه
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

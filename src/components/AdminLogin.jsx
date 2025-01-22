import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./AdminLogin.module.css";

const AdminLogin = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
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

  const showTemporaryError = (message) => {
    setError(message);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    navigate("/confirmation");
  };

  const handleUserChange = (e) => {
    if (e.target.value.trim) {
      setUser(e.target.value);
    }
  };

  const handPassChange = (e) => {
    if (e.target.value.trim) {
      setPass(e.target.value);
    }
  };

  const handleForgetPassword = () => {};

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Validate inputs
    if (!user || !pass) {
      alert("Please fill in all fields");
      return;
    }

    // Here you can add your login logic
    console.log("Form submitted:", { user, pass });

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
        opacity: isBackgroundLoaded ? 1 : 0,
        // transition: "opacity 0.6s ease",
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
        <input
          className={`${styles.input} ${styles.user}`}
          type="text"
          placeholder="نام کاربری"
          value={user}
          onInvalid={(e) => {
            e.preventDefault();
            showTemporaryError("ورود این فیلد اجباری است");
          }}
          onChange={handleUserChange}
          required
        />
        <span
          className={`${styles.errorMessage} ${
            isVisible ? styles.show : styles.hide
          }`}
        >
          {error}
        </span>
        <input
          className={`${styles.input} ${styles.pass}`}
          type="password"
          placeholder="رمز عبور"
          value={pass}
          onInvalid={(e) => {
            e.preventDefault();
            showTemporaryError("ورود این فیلد اجباری است");
          }}
          onChange={handPassChange}
          required
        />
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

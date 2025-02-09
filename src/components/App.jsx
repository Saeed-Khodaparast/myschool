import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import LoginConfirm from "./LoginConfirm";
import Admin from "./Admin";
import SelectSchool from "./SelectSchool";
import SelectShift from "./SelectShift";
import "./App.css";
import AcademicYear from "./AcademicYear";
import EducationalLevel from "./EducationalLevel";
import SchoolRegisterLogin from "./SchoolRegisterLogin";
import { LoadingContext } from "./LoadingContext";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktopSize, setIsDesktopSize] = useState(false);
  const [windowSize, setWindowSize] = useState({
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    outerDecimal: window.outerWidth / window.outerHeight,
    outerRatio: decimalToRatio(window.outerWidth / window.outerHeight),
    innerWidth: window.innerWidth,
    innerHeight: window.visualViewport?.height || window.innerHeight,
    innerDecimal: window.innerWidth / window.innerHeight,
    innerRatio: decimalToRatio(window.innerWidth / window.innerHeight),
    visualViewportWidth: window.visualViewport?.width,
    visualViewportHeight: window.visualViewport?.height,
    visualViewportDecimal:
      window.visualViewport?.width / window.visualViewport?.height,
    visualViewportRatio: decimalToRatio(
      window.visualViewport?.width / window.visualViewport?.height
    ),
    toolbarHeight:
      window.outerHeight - window.visualViewport?.height || window.innerHeight,
  });
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId;
    const container = document.querySelector(`body`);
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        console.log("Resize happens");
        setWindowSize((prevSize) => ({
          ...prevSize,
          outerWidth: window.outerWidth,
          outerHeight: window.outerHeight,
          outerDecimal: window.outerWidth / window.outerHeight,
          outerRatio: decimalToRatio(window.outerWidth / window.outerHeight),
          innerWidth: window.innerWidth,
          innerHeight: window.visualViewport?.height || window.innerHeight,
          innerDecimal: window.innerWidth / window.innerHeight,
          innerRatio: decimalToRatio(window.innerWidth / window.innerHeight),
          visualViewportWidth: window.visualViewport?.width,
          visualViewportHeight: window.visualViewport?.height,
          visualViewportDecimal:
            window.visualViewport?.width / window.visualViewport?.height,
          visualViewportRatio: decimalToRatio(
            window.visualViewport?.width / window.visualViewport?.height
          ),
          toolbarHeight:
            window.outerHeight - window.visualViewport?.height ||
            window.innerHeight,
        }));
        if (windowSize.innerWidth / windowSize.innerHeight < 1) {
          setIsDesktopSize(false);
        } else {
          setIsDesktopSize(true);
        }
      }, 0);
    };

    if (windowSize.innerWidth / windowSize.innerHeight < 1) {
      setIsDesktopSize(false);
    } else {
      setIsDesktopSize(true);
    }

    // container.style.aspectRatio = `${
    //   windowSize.innerWidth /
    //   (windowSize.innerHeight + windowSize.toolbarHeight)
    // }`;

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
    // const handleResponsiveLayout = (e) => {
    //   const viewport = new ViewportCalculator();
    //   const width = window.innerWidth;
    //   const height = window.innerHeight;
    //   if (width >= 1366 && height >= 768) {
    //     // Small laptop styles
    //   } else if (width >= 1920 && height >= 1080) {
    //     // Standard laptop/desktop styles
    //   } else if (width >= 2560 && height >= 1440) {
    //     // QHD desktop styles
    //   }
    //   // Set container height
    //   document.querySelector(
    //     `.${styles.container}`
    //   ).style.minHeight = `${viewport.getVisualViewportHeight()}px`;
    // };
    // const mediaQuery = window.matchMedia("(max-width: 1024px)");
    // mediaQuery.addListener(handleResponsiveLayout);
    // // Initial check
    // handleResponsiveLayout(mediaQuery);
    // // Cleanup
    // return () => {
    //   mediaQuery.removeListener(handleResponsiveLayout);
    // };
  }, [windowSize, isDesktopSize]);

  return (
    <>
      <div className="screenSizes">
        <span>OW: {windowSize.outerWidth}</span>
        <span>OH: {windowSize.outerHeight}</span>
        <span>OD: {windowSize.outerDecimal}</span>
        <span>OR: {windowSize.outerRatio}</span>
        <span>IW: {windowSize.innerWidth}</span>
        <span>IH: {windowSize.innerHeight}</span>
        <span>ID: {windowSize.innerDecimal}</span>
        <span>IR: {windowSize.innerRatio}</span>
        <span>VVW: {windowSize.visualViewportWidth}</span>
        <span>VVH: {windowSize.visualViewportHeight}</span>
        <span>VVD: {windowSize.visualViewportDecimal}</span>
        <span>VVR: {windowSize.visualViewportRatio}</span>
        <span>TH: {windowSize.toolbarHeight}</span>
      </div>
      <div className={`loading ${isLoading ? "" : "close"}`}>
        در حال بارگزاری صفحه ...
      </div>
      <div className={`sizeMessage ${isDesktopSize ? "close" : ""}`}>
        این برنامه برای سایز دسکتاپ طراحی شده است
      </div>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route
            path="confirmation"
            element={<LoginConfirm handleReturn={() => navigate("/")} />}
          />
          <Route path="admin" element={<Admin />} />
          <Route path="selectschool" element={<SelectSchool />} />
          <Route path="selectshift/:gender" element={<SelectShift />} />
          <Route
            path="academicyear/:gender/:shift"
            element={<AcademicYear />}
          />
          <Route
            path="academicyear/:gender/:shift/:level"
            element={<EducationalLevel />}
          />
          <Route path="schoolregister" element={<SchoolRegisterLogin />} />
          <Route
            path="schoolregister/confirmation"
            element={
              <LoginConfirm
                handleReturn={() => {
                  navigate("schoolregister");
                }}
              />
            }
          />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </LoadingContext.Provider>
    </>
  );
};

function decimalToRatio(decimal) {
  // Convert to string to handle decimal places
  const str = decimal.toString();

  // Get number of decimal places
  const decimalPlaces = str.includes(".") ? str.split(".")[1].length : 0;

  // Convert to whole numbers
  const multiplier = Math.pow(10, decimalPlaces);
  const numerator = decimal * multiplier;
  const denominator = multiplier;

  // Find GCD
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  const divisor = gcd(Math.round(numerator), denominator);

  // Simplify the ratio
  const x = Math.round(numerator) / divisor;
  const y = denominator / divisor;

  return `${x}:${y}`;
}

export default App;

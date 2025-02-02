import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import LoginConfirm from "./LoginConfirm";
import Admin from "./Admin";
import SelectSchool from "./SelectSchool";
import SelectShift from "./SelectShift";
import "./App.css";
import AcademicYear from "./AcademicYear";
import EducationalLevel from "./EducationalLevel";
import SchoolRegisterLogin from "./SchoolRegisterLogin";

const App = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route
        path="confirmation"
        element={<LoginConfirm handleReturn={() => navigate("/")} />}
      />
      <Route path="admin" element={<Admin />} />
      <Route path="selectschool" element={<SelectSchool />} />
      <Route path="selectshift/:gender" element={<SelectShift />} />
      <Route path="academicyear/:gender/:shift" element={<AcademicYear />} />
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
  );
};

export default App;

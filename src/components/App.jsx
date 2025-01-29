import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import LoginConfirm from "./LoginConfirm";
import Admin from "./Admin";
import SelectSchool from "./SelectSchool";
import SelectShift from "./SelectShift";
import "./App.css";
import AcademicYear from "./AcademicYear";

const App = () => {
  return (
    <BrowserRouter basename="/myschool/">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="confirmation" element={<LoginConfirm />} />
        <Route path="admin" element={<Admin />} />
        <Route path="selectschool" element={<SelectSchool />} />
        <Route path="selectshift/:gender" element={<SelectShift />} />
        <Route path="academicyear/:gender/:shift" element={<AcademicYear />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import LoginConfirm from "./LoginConfirm";
import Admin from "./Admin";
import SelectSchool from "./SelectSchool";
import SelectShift from "./SelectShift";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter basename="/myschool">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="confirmation" element={<LoginConfirm />} />
        <Route path="admin" element={<Admin />} />
        <Route path="selectschool" element={<SelectSchool />} />
        <Route path="selectshift" element={<SelectShift />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import LoginConfirm from "./LoginConfirm";
import Admin from "./Admin";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="confirmation" element={<LoginConfirm />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

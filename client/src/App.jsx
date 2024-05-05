import { BrowserRouter, Routes, Route, Router, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginSignup from "./components/LoginSignup";
import LandingPage from "./components/LandingPage";
import "./App.css";

const App = () => {
  return (
    <div className="w-full p-6">
       <Navbar />
      <Outlet />
    </div>
  );
};

export default App
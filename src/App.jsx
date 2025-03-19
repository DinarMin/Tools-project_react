import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./reset.css";
import "./main.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "../pages/home/Home";
import Calculator from "../pages/calculator/Calculator";
import TaskNest from "../pages/taskNest/TaskNest";
import WeatherMe from "../pages/weatherMe/WeatherMe";

import ScrollToTop from "../utils/scrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/TaskNest" element={<TaskNest />} />
        <Route path="/WeatherMe" element={<WeatherMe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

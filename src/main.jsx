import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./reset.css"
import "./main.css"

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "../pages/home/Home";
import Calculator from "../pages/calculator/Calculator";
import TaskNest from "../pages/taskNest/TaskNest";
import WeatherMe from "../pages/weatherMe/WeatherMe";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Home />
    {/* <Calculator /> */}
    {/* <TaskNest /> */}
    {/* <WeatherMe /> */}
    <Footer />
  </StrictMode>
);

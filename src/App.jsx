import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./reset.css";
import "./main.css";

import { Layout } from "./layout";
import Home from "../pages/home/Home";
import Calculator from "../pages/calculator/Calculator";
import TaskNest from "../pages/taskNest/TaskNest";
import WeatherMe from "../pages/weatherMe/WeatherMe";

import ScrollToTop from "../utils/scrollToTop";
import { NotFound404 } from "../pages/notFound404/page.jsx";

export default function App() {
  return (
    <Router basename="/Tools-project_react">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Calculator" element={<Calculator />} />
          <Route path="TaskNest" element={<TaskNest />} />
          <Route path="WeatherMe" element={<WeatherMe />} />
        </Route>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

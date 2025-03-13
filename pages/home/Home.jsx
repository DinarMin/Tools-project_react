import "./home.css";
import { Link } from "react-router-dom";
import Search from "../../src/components/search/Search";

export default function Home() {
  return (
    <main className="main">
      <section className="welcome">
        <div className="container">
          <div className="title-block">
            <div className="title-block__text">
              <div className="demo">[ Development is underway ]</div>
              <h1>Useful tools for every day.</h1>
              <p>
                Tool is a web collection of information about tools that make
                life easier.
              </p>
            </div>
            <Search />
            <ul className="title-block__social">
              <li>
                <a href="https://github.com/DuHaPuK" target="_blank">
                  <img src="./public/svg/Social/github-dark.svg" alt="github" />
                </a>
              </li>
              <li>
                <a href="https://t.me/DuHaPuK" target="_blank">
                  <img src="./public/svg/Social/telegram.svg" alt="telegram" />
                </a>
              </li>
              <li>
                <a href="#!" target="_blank">
                  <img src="./public/svg/Social/linkedin.svg" alt="linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <figure>
            <img
              src="./public/svg/Illustration-title.svg"
              alt="title-image"
              className="welcome__img"
            />
          </figure>
        </div>
      </section>
      <section className="tools">
        <div className="container">
          <h2 className="tools__title">Popular Tools</h2>
          <ul className="tools__cards">
            <li className="tools__cards__item">
              <div className="tools__cards__content">
                <img
                  src="./public/svg/Tools/calculator.svg"
                  alt="Calculator"
                  className="tools__cards__img"
                />
                <div className="tools__cards__text-block">
                  <h3 className="tools__cards__text-block__title">
                    Calculator
                  </h3>
                  <span>Free</span>
                </div>
              </div>
              <p className="tools__cards__description">
                A calculator that calculates numbers
              </p>
              <Link to="/Calculator" className="btn_card">
                Open
              </Link>
            </li>
            <li className="tools__cards__item">
              <div className="tools__cards__content">
                <img
                  src="./public/svg/Tools/taskNest.svg"
                  alt="Task-Nest"
                  className="tools__cards__img"
                />
                <div className="tools__cards__text-block">
                  <h3 className="tools__cards__text-block__title">TaskNest</h3>
                  <span>Free</span>
                </div>
              </div>
              <p className="tools__cards__description">
                A to-do list management app that helps you manage your tasks
                easily.
              </p>
              <Link to="/taskNest" className="btn_card">
                Open
              </Link>
            </li>
            <li className="tools__cards__item">
              <div className="tools__cards__content">
                <img
                  src="./public/svg/Tools/weather.svg"
                  alt="Weather"
                  className="tools__cards__img"
                />
                <div className="tools__cards__text-block">
                  <h3 className="tools__cards__text-block__title">WeatherMe</h3>
                  <span>Free</span>
                </div>
              </div>
              <p className="tools__cards__description">
                Current weather for the days ahead.
              </p>
              <Link to="/WeatherMe" className="btn_card">
                Open
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

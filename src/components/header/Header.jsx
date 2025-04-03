import "./header.css";
import { Link } from "react-router-dom";

export const Header = ({ onClickModal }) => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-block">
            <div className="logo-block">
              <Link to="/" className="logo-block__link">
                <img
                  src="public/svg/logo.svg"
                  alt="logo"
                  className="logo-block__img"
                />
                <span className="logo-block__text">Tools.</span>
              </Link>
            </div>
            <nav className="main-nav">
              <ul className="main-nav__list">
                <li className="main-nav__item">
                  <Link to="/" className="main-nav__link">
                    Home
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="auth-nav">
              <button className="btn_login">Login</button>
              <button onClick={onClickModal} className="btn btn_sign-up">
                Sign Up
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

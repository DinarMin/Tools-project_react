import "./header.css"

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-block">
            <div className="logo-block">
              <a href="index.html" className="logo-block__link">
                <img
                  src="public/svg/logo.svg"
                  alt="logo"
                  className="logo-block__img"
                />
                <span className="logo-block__text">Tools.</span>
              </a>
            </div>
            <nav className="main-nav">
              <ul className="main-nav__list">
                <li className="main-nav__item">
                  <a href="index.html" className="main-nav__link">
                    Home
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="auth-nav">
              <button className="btn_login">Login</button>
              <button className="btn btn_sign-up">Sign Up</button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

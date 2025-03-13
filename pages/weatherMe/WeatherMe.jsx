import "./weatherMe.css";

export default function WeatherMe() {
  return (
    <main className="main">
      <section className="header-weather">
        <div className="container">
          <div className="weather-logo-block">
            <img
              src="public/svg/Tools/weather.svg"
              alt="logo"
              className="weather-logo-block__img"
            />
            <h1 className="weather-logo-block__title">WeatherMe</h1>
            <p className="weather-logo-block__time" />
          </div>
          <nav className="weather-nav">
            <ul className="weather-nav__list">
              <li className="weather-nav__item weather-nav__item_active">
                <button>Today</button>
              </li>
              <li className="weather-nav__item">
                <button>Tommorow</button>
              </li>
              <li className="weather-nav__item">
                <button>Monthly Forecast</button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section className="input-block">
        <div className="container">
          <form className="form-search-weather">
            <input
              className="input-search"
              type="text"
              placeholder="Search location..."
            />
            <button className="btn-search-weather">Search</button>
          </form>
        </div>
      </section>
      <section className="weather-main">
        <div className="container">
          <button className="left-arrow">
            <svg
              className="left-arrow-svg"
              width="26.020447"
              height="42.040920"
              viewBox="0 0 26.0204 42.0409"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                className="left-arrow-svg"
                id="left-arrow"
                d="M21 5.02L5 21.02L21 37.02"
                stroke="#000000"
                strokeOpacity={1.0}
                strokeWidth={10.0}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="slider-container"></div>
          <button className="right-arrow">
            <svg
              className="right-arrow-svg"
              width="26.020447"
              height="42.040920"
              viewBox="0 0 26.0204 42.0409"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                className="right-arrow-svg"
                id="right-arrow"
                d="M5.02 37.02L21.02 21.02L5.02 5.02"
                stroke="#000000"
                strokeOpacity={1.0}
                strokeWidth={10.0}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
}

import {useState, useEffect} from 'react';
import "./weatherMe.css";

/* 
Карточка с городом

<div className="slider-card">
  <div className="slider-card__location-block">
    <p className="slider-card__location-text">Kazan</p>
    <img
      className="slider-card__location-img"
      src="public/svg/weather/location_.svg"
      alt="location"
    />
    <button className="slider-card__delete-btn" id="1742042420597.0098" />
  </div>
  <div className="slider-card__temp-block">
    <img
      className="slider-card__temp-img"
      src="public/svg/weather/temperature_.svg"
      alt="temperature"
    />
    <p className="slider-card__temp-meaning">6°C</p>
  </div>
  <div className="slider-card__data-block">
    <p className="slider-card__data-text">Mar 15, Sat</p>
  </div>
</div>

-------
Чистая карточка 

<div className="slider-card">
  <div className="slider-card__location-block">
    <p className="slider-card__location-text" />
    <img
      className="slider-card__location-img"
      src="public/svg/weather/location_.svg"
      alt="location"
    />
    <button className="slider-card__delete-btn none" />
  </div>
  <div className="slider-card__temp-block">
    <img
      className="slider-card__temp-img"
      src="public/svg/weather/temperature_.svg"
      alt="temperature"
    />
    <p className="slider-card__temp-meaning">&lt;Enter city name&gt;</p>
  </div>
  <div className="slider-card__data-block">
    <p className="slider-card__data-text">Mar 15, Sat</p>
  </div>
</div>


 */

/* Вывод времени на странице*/

const getTime = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes <= 9) {
    return `${hours}:0${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
}

const nowTime = getTime();


/* Вывод даты на карточку с погодой. */
/* Отрисовка карточки с погодой на странице */
/* Отображение информации после ввода */
/* Вовзращает название месяца место числа */
/* Возвращает назание дня недели место числа */
/* Отработка элемента поиска при нажатии на ENTER */
/* Отбработка кликов */
/* Прооверка на повтор */
/* Запрос информации о погоде */
/* Асинхронный запрос далее рендер */
/* Добавление в массив */
/* Загрузка массив со списком в localStorage */
/* Загрузка  массив со списком из localStorage*/
/* Загрузка масссив со списком из localStorage во время загрузки DOM */
/* Удаление карточки из localStorage */
/* Удаление карточки с погодой */
/* Удаление элемента если массив с городом пуст */
/* Добавить список избранных городов, по мимо прокрутки */


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
            <p className="weather-logo-block__time">{nowTime}</p>
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
            <button className="btn-search-weather" onClick={(e) => e.preventDefault()}>Search</button>
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
          <div className="slider-container">
            <div className="slider-card">
              <div className="slider-card__location-block">
                <p className="slider-card__location-text">&lt;location&gt;</p>
                <img
                  className="slider-card__location-img"
                  src="public/svg/weather/location_.svg"
                  alt="location"
                />
                <button className="slider-card__delete-btn none" />
              </div>
              <div className="slider-card__temp-block">
                <img
                  className="slider-card__temp-img"
                  src="public/svg/weather/temperature_.svg"
                  alt="temperature"
                />
                <p className="slider-card__temp-meaning">
                  &lt;Enter city name&gt;
                </p>
              </div>
              <div className="slider-card__data-block">
                <p className="slider-card__data-text">&lt;Date&gt;</p>
              </div>
            </div>
          </div>
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

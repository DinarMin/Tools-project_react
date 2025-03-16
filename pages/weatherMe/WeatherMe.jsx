import { useState, useEffect } from "react";
import "./weatherMe.css";

const API_KEY = "a53c098ae82543b4a48124519252402";

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
/* Загрузка массив со списком в localStorage */
/* Загрузка  массив со списком из localStorage*/
/* Загрузка масссив со списком из localStorage во время загрузки DOM */
/* Удаление карточки из localStorage */
/* Удаление карточки с погодой */
/* Удаление элемента если массив с городом пуст */
/* Добавить список избранных городов, по мимо прокрутки */

export default function WeatherMe() {
  const [cityList, setCityList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [nowDate, setNowDate] = useState(new Date())

  useEffect(() => {
  setNowDate(new Date());
  }, [])

  useEffect(() => {
    console.log(cityList);
  }, [cityList]);

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
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const nowTime = getTime();

  /* Запрос информации о погоде */

  async function getWeatherCity(city, apiKey) {
    try {
      let response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      let weatherInfo = await response.json();
      const cityLocation = weatherInfo.location.name;
      const cityTemp = parseInt(weatherInfo.current.temp_c);
      addWeather(cityLocation, cityTemp, getDate());
      setInputValue("");
    } catch (err) {
      alert(`Ошибка: ${err.message}. Такого города похоже нет!`);
    }
  }

  /* Добавление в массив */

  function addWeather(city, temperature, date) {
    const newWeatherInfo = {
      id: Date.now(),
      city: city,
      temp: temperature,
      date: date,
    };
    setCityList((prevList) => {
      const updateList = [...prevList, newWeatherInfo];
      setCurrentCityIndex(updateList.length - 1);
      return updateList;
    });
  }

  function leftArrow() {
    setCurrentCityIndex(
      (prevIndex) => (prevIndex - 1 + cityList.length) % cityList.length
    );
  }

  function rightArrow() {
    setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cityList.length);
  }

  /* Вовзращает название месяца место числа */

  function getMonth(nowDate) {
    let month = nowDate.getMonth();

    switch (month) {
      case 0:
        return "Jun";
      case 1:
        return "Feb";
      case 2:
        return "Mar";
      case 3:
        return "Apr";
      case 4:
        return "May";
      case 5:
        return "Jun";
      case 6:
        return "Jul";
      case 7:
        return "Aug";
      case 8:
        return "Sep";
      case 9:
        return "Oct";
      case 10:
        return "Nov";
      case 11:
        return "Dec";
    }
  }

  /* Возвращает назание дня недели место числа */

  function getWeekDay(nowDate) {
    let weekDay = nowDate.getDay();

    switch (weekDay) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";
      case 2:
        return "Tues";
      case 3:
        return "Wed";
      case 4:
        return "Thurs";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
    }
  }

  /* Возврат отформатированной даты */

  function getDate() {
    let month = getMonth(nowDate);
    let weekDay = getWeekDay(nowDate);
    let dayDate = nowDate.getDate();
    const dateTime = `${month} ${dayDate}, ${weekDay}`;

    return dateTime;
  }

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
              value={inputValue}
              onChange={handleChange}
              className="input-search"
              type="text"
              placeholder="Search location..."
            />
            <button
              className="btn-search-weather"
              onClick={(e) => {
                e.preventDefault();
                getWeatherCity(inputValue, API_KEY);
              }}
            >
              Search
            </button>
          </form>
        </div>
      </section>
      <section className="weather-main">
        <div className="container">
          <button className="left-arrow">
            <svg
              onClick={() => leftArrow()}
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
            {cityList.length > 0 && (
              <div className="slider-card" key={cityList[currentCityIndex].id}>
                <div className="slider-card__location-block">
                  <p className="slider-card__location-text">
                    {cityList[currentCityIndex].city}
                  </p>
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
                    {cityList[currentCityIndex].temp}°C
                  </p>
                </div>
                <div className="slider-card__data-block">
                  <p className="slider-card__data-text">
                    {cityList[currentCityIndex].date}
                  </p>
                </div>
              </div>
            )}
          </div>
          <button className="right-arrow">
            <svg
              onClick={() => rightArrow()}
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

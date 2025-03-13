import { useState } from "react";
import { Link } from "react-router-dom";
import "./search.css";

export default function Search() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <form
        className={`title-block__search + ${
          isFocused ? "title-block__search_radius" : ""
        }`}
      >
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search..."
          type="search"
          className="search"
        />
        <button className="btn btn_search" type="submit">
          Search
        </button>
      </form>
      <ul
        className={`list-suggestions + ${
          isFocused ? "list-suggestions_show" : ""
        }`}
      >
        <li className="suggestions-item">
          <Link to="/Calculator">Calculator</Link>
        </li>
        <li className="suggestions-item">
          <Link to="/taskNest">TaskNest</Link>
        </li>
        <li className="suggestions-item">
          <Link to="/WeatherMe">WeatherMe</Link>
        </li>
      </ul>
    </>
  );
}

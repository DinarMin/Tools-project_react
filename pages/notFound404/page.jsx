import "./notFound404.css";
import { Link } from "react-router-dom";

export const NotFound404 = () => {
  return (
    <div className="block404">
      <div className="container">
        <h1 className="title404">404</h1>
        <p className="text404">Sorry, we believe unable to find that page</p>
        <Link to="/" className="main-nav__link main-nav__link_404">
          Home
        </Link>
      </div>
    </div>
  );
};

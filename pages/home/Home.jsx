import "./home.css";
import { useNavigate } from "react-router-dom";
import Search from "../../src/components/search/Search";

import { tools } from "../../src/data/tools-list";
import { socialsList } from "../../src/data/social-list";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="main">
      <section className="welcome">
        <div className="container">
          <div className="title-block">
            <div className="title-block__text">
              <div className="demo">[ Development is underway ]</div>
              <h1>Useful tools for every day.</h1>
            </div>
            <Search />
            <ul className="title-block__social">
              {socialsList.map((social) => (
                <li key={social.id}>
                  <a href={social.href} target="_blank">
                    <img src={social.src} alt={social.name} />
                  </a>
                </li>
              ))}
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
            {tools.map((tool) => (
              <li className="tools__cards__item" key={tool.id}>
                <div className="tools__cards__content">
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="tools__cards__img"
                  />
                  <div className="tools__cards__text-block">
                    <h3 className="tools__cards__text-block__title">
                      {tool.name}
                    </h3>
                    <span>Free</span>
                  </div>
                </div>
                <p className="tools__cards__description">{tool.description}</p>
                <button
                  onClick={() => navigate(tool.path)}
                  className="btn_card"
                >
                  Open
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

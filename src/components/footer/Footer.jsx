import "./footer.css";

export default function () {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content-block">
          <div className="block-description">
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
            <p>Copyright 2025. Tools</p>
            <p>
              Tool is a web collection of information about tools that make life
              easier.
            </p>
          </div>
          <div className="block-contact">
            <address>
              <h4 className="block-contact__title">Contact Us</h4>
              <a className="block-contack__number" href="tel:+79501845668">
                +7(950)-184-56-68
              </a>
              <p className="block-contact__city">Kazan, Tatarstan</p>
              <a
                className="block-contact__email"
                href="mailto:Dinar2202@gmail.com"
              >
                Dinar2202@gmail.com
              </a>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

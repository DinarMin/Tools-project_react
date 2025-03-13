import "./calculator.css";

export default function Calculator() {
  return (
    <main className="main">
      <div className="container">
        <div className="demo">[ Demo mode. Development is underway ]</div>
        <div className="title-block-calc">
          <img
            src="public/svg/Tools/calculator.svg"
            alt="calculator-logo"
            className="title-img"
          />
          <h1 className="title">Calculator</h1>
        </div>
        <div className="calculator">
          <div className="calculator__display">
            <div className="error-msg">Error, sign not placed!</div>
            <div className="calculator__display__history" />
            <div className="calculator__display__answer">0</div>
          </div>
          <div className="line" />
          <div className="calculator__actions">
            <div className="calculator__actions__row">
              <div className="calculator__actions__col" data-type="clear">
                C
              </div>
              <div className="calculator__actions__col" data-type="bracket">
                ( )
              </div>
              <div className="calculator__actions__col" data-type="%">
                %
              </div>
              <div
                className="calculator__actions__col calculator__actions__col_accent"
                data-type="/"
              >
                ÷
              </div>
            </div>
            <div className="calculator__actions__row">
              <div className="calculator__actions__col" data-type={7}>
                7
              </div>
              <div className="calculator__actions__col" data-type={8}>
                8
              </div>
              <div className="calculator__actions__col" data-type={9}>
                9
              </div>
              <div
                className="calculator__actions__col calculator__actions__col_accent"
                data-type="*"
              >
                ×
              </div>
            </div>
            <div className="calculator__actions__row">
              <div className="calculator__actions__col" data-type={4}>
                4
              </div>
              <div className="calculator__actions__col" data-type={5}>
                5
              </div>
              <div className="calculator__actions__col" data-type={6}>
                6
              </div>
              <div
                className="calculator__actions__col calculator__actions__col_accent"
                data-type="-"
              >
                -
              </div>
            </div>
            <div className="calculator__actions__row">
              <div className="calculator__actions__col" data-type={1}>
                1
              </div>
              <div className="calculator__actions__col" data-type={2}>
                2
              </div>
              <div className="calculator__actions__col" data-type={3}>
                3
              </div>
              <div
                className="calculator__actions__col calculator__actions__col_accent"
                data-type="+"
              >
                +
              </div>
            </div>
            <div className="calculator__actions__row">
              <div className="calculator__actions__col" data-type=".">
                .
              </div>
              <div className="calculator__actions__col" data-type={0}>
                0
              </div>
              <div
                className="calculator__actions__col img"
                data-type="delete"
              />
              <div
                className="calculator__actions__col calculator__actions__col_accent"
                data-type="="
              >
                =
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

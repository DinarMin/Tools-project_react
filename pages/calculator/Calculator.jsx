import { useState } from "react";

import "./calculator.css";

export default function Calculator() {
  const [tempHistory, setTempHistory] = useState([]);
  const [answer, setAnswer] = useState(0);
  const [tempNumber, setTempNumber] = useState("");

  /* Отслеживание определенных нажатых кнопок и их дальнейшие действие. */

  const buttonPressed = (type) => {
    if (type >= 0) {
      setTempHistory((prevHistory) => [...prevHistory, type]);
    } else if (["+", "-", "/", "*"].includes(type)) {
      setTempHistory((prevHistory) => [...prevHistory, type]);
    } else if (type === "clear") {
      setTempHistory([]);
    } else if (type === "delete") {
      console.log(type);
    } else if (type === "%") {
      console.log(type);
    } else if (type === ".") {
      setTempHistory((prevHistory) => [...prevHistory, type]);
    } else if (type === "bracket") {
      console.log(type);
    }
  };

  /* Вывод ошибки на дисплее */
  /* Определение наличие запятой в последнем числе массива, возрат булевое значение */
  /* Опредление наличие скобки и какой скобки , возврат булевое значение. */
  /* Определение нажатых кнопок клавиатурой */
  /* Отрисовка истории расчета на дисплее*/
  /* Отрисовка ответа */
  /* Вычисление */
  /* Сортирует массив для дальнейших вычислений */

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
            <div className="calculator__display__history">{tempHistory}</div>
            <div className="calculator__display__answer">{answer}</div>
          </div>
          <div className="line" />
          <div className="calculator__actions">
            <div className="calculator__actions__row">
              <div
                className="calculator__actions__col"
                onClick={() => buttonPressed("clear")}
              >
                C
              </div>
              <div
                className="calculator__actions__col"
                onClick={() => buttonPressed("bracket")}
              >
                ( )
              </div>
              <div
                className="calculator__actions__col"
                onClick={() => buttonPressed("%")}
              >
                %
              </div>
              <div
                className="calculator__actions__col calculator__actions__col_accent"
                onClick={() => buttonPressed("/")}
              >
                ÷
              </div>
            </div>
            <div className="calculator__actions__row">
              <div
                className="calculator__actions__col"
                onClick={() => buttonPressed(7)}
              >
                7
              </div>
              <div
                className="calculator__actions__col"
                onClick={() => buttonPressed(8)}
              >
                8
              </div>
              <div
                className="calculator__actions__col"
                onClick={() => buttonPressed(9)}
              >
                9
              </div>
              <div
                className="calculator__actions__col calculator__actions__col_accent"
                onClick={() => buttonPressed("*")}
              >
                ×
              </div>
            </div>
            <div className="calculator__actions__row">
              <div
                className="calculator__actions__col"
                onClick={() => buttonPressed(4)}
              >
                4
              </div>
              <div
                className="calculator__actions__col"
                onClick={() => buttonPressed(5)}
              >
                5
              </div>
              <div
                className="calculator__actions__col"
                onClick={() => buttonPressed(6)}
              >
                6
              </div>
              <div
                className="calculator__actions__col calculator__actions__col_accent"
                onClick={() => buttonPressed("-")}
              >
                -
              </div>
            </div>
            <div className="calculator__actions__row">
              <div
                className="calculator__actions__col"
                onClick={() => buttonPressed(1)}
              >
                1
              </div>
              <div
                className="calculator__actions__col"
                onClick={() => buttonPressed(2)}
              >
                2
              </div>
              <div
                className="calculator__actions__col"
                onClick={() => buttonPressed(3)}
              >
                3
              </div>
              <div
                className="calculator__actions__col calculator__actions__col_accent"
                onClick={() => buttonPressed("+")}
              >
                +
              </div>
            </div>
            <div className="calculator__actions__row">
              <div
                className="calculator__actions__col"
                onClick={() => buttonPressed(".")}
              >
                .
              </div>
              <div
                className="calculator__actions__col"
                onClick={() => buttonPressed(0)}
              >
                0
              </div>
              <div
                className="calculator__actions__col img"
                onClick={() => buttonPressed("delete")}
              />
              <div
                className="calculator__actions__col calculator__actions__col_accent"
                onClick={() => buttonPressed("equals")}
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

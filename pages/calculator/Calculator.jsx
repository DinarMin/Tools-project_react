import { useEffect, useState } from "react";

import "./calculator.css";

export default function Calculator() {
  const [tempHistory, setTempHistory] = useState([]);
  const [answer, setAnswer] = useState(0);
  const [checkComma, setCheckComma] = useState(false);

  /* Запускает вычисление и рендер в реальном времени. Запускает проверку запятой. */

  useEffect(() => {
    if (tempHistory.length > 0) {
      const sortArr = updateExpression(tempHistory);
      const result = calculate(sortArr);
      setAnswer(result);
    }
    setCheckComma(checkHasDot(tempHistory));
  }, [tempHistory, answer]);

  /* Определение нажатых кнопок клавиатурой */

  useEffect(() => {
    const handleKeyDown = (event) => {
      buttonPressed(event.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* Отслеживание определенных нажатых кнопок и их дальнейшие действие. */

  const buttonPressed = (type) => {
    if (type >= 0) {
      setTempHistory((prevHistory) => [...prevHistory, type]);
    } else if (["+", "-", "/", "*"].includes(type)) {
      setTempHistory((prevHistory) => [...prevHistory, type]);
    } else if (type === "clear") {
      setTempHistory([]);
      setAnswer("0");
    } else if (type === "delete" || type === "Backspace") {
      setTempHistory((prevHistory) => {
        const updatedHistory = prevHistory.slice(0, -1);
        if (updatedHistory.length === 0) {
          setAnswer("0");
        }
        return updatedHistory;
      });
    } else if (type === "%") {
      console.log(type);
    } else if (type === "." && !checkComma) {
      if (tempHistory.length === 0) {
        setTempHistory(["0."]);
      } else {
        setTempHistory((prevHistory) => [...prevHistory, type]);
      }
    } else if (type === "bracket") {
      console.log(type);
    } else if (type === "equals" || type === "Enter") {
      setTempHistory([]);
    }
  };

  /* Вычисление */

  const calculate = (arr) => {
    let total = 0;
    arr.forEach((item, index) => {
      item = parseFloat(item);
      if (index === 0) {
        total = item;
      } else if (index - 2 >= 0) {
        let prevItem = arr[index - 1];
        if (prevItem === "+") {
          total = total + item;
        } else if (prevItem === "-") {
          total = total - item;
        } else if (prevItem === "*") {
          total = total * item;
        } else if (prevItem === "/") {
          total = total / item;
        }
      }
    });
    return total;
  };

  /* Сортирует массив для дальнейших вычислений */

  const updateExpression = (arr) => {
    let result = [];
    let bufferNum = "";

    arr.forEach((item) => {
      if (!isNaN(item) || item === ".") {
        bufferNum = bufferNum + item;
      } else {
        if (bufferNum) {
          result.push(bufferNum);
          bufferNum = "";
        }
        result.push(item);
      }
    });

    if (bufferNum) {
      result.push(bufferNum);
    }
    return result;
  };

  /* Рендер истории на дисплее */

  const renderHistory = () => {
    return tempHistory.map((item, index) => {
      if (item === "+" || item === "-") {
        return <strong key={index}> {item} </strong>;
      } else if (item === "*") {
        item = "×";
        return <strong key={index}> {item} </strong>;
      } else if (item === "/") {
        item = "÷";
        return <strong key={index}> {item} </strong>;
      }
      return <span key={index}>{item}</span>;
    });
  };

  /* Определение наличие запятой в последнем числе массива, возрат булевое значение */

  function checkHasDot(arr) {
    if (arr.length === 0) return false;

    let lastNumber = "";

    for (let i = arr.length - 1; i >= 0; i--) {
      if (/\d/.test(arr[i]) || arr[i] === ".") {
        lastNumber = lastNumber + arr[i];
      } else {
        break;
      }
    }
    return lastNumber.includes(".");
  }

  /* Вывод ошибки на дисплее */
  /* Определение наличие запятой в последнем числе массива, возрат булевое значение */
  /* Опредление наличие скобки и какой скобки , возврат булевое значение. */

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
            <div className="calculator__display__history">
              {renderHistory()}
            </div>
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

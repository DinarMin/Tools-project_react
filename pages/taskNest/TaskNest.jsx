import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./taskNest.css";

export default function TaskNest() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  /* Создание обьекта с задачей и добавление в массив tasks */

  const addTask = () => {
    if (inputValue.trim() === "") return;
    const newTask = { id: Date.now(), text: inputValue, state: false };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  /* Загрузка задач с localStorage при загрузке страницы */

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  /* Добавление задачи в localStorage при изменении tasks */

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  /* Отработка кнопки Enter */

  const addTaskEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  };

  /* Отслеживание value на input */

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  /* Удаление задачи */

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    deleteTaskStorage(taskId);
  };

  /* Удаление задачи с localStorage */
  function deleteTaskStorage(taskId) {
    const boxtasks = JSON.parse(localStorage.getItem("tasks")) || [];
    boxtasks.forEach((task, index) => {
      if (taskId == task.id) {
        boxtasks.splice(index, 1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(boxtasks));
    if (localStorage.getItem("tasks").length === 2) {
      localStorage.removeItem("tasks");
    }
  }

  /* Изменение состояние задачи */
  const changeState = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, state: !task.state } : task
      )
    );
  };

  return (
    <main className="main">
      <div className="container">
        <section className="top-sort">
          <div className="top-sort__content">
            <div className="logo-block">
              <img
                src="public/svg/Tools/taskNest.svg"
                alt="logo-TaskNest"
                className="logo-block__img"
              />
              <span className="logo-block__name">TaskNest</span>
            </div>
            <ul className="sort-list">
              <li className="sort-list__item">
                <img
                  src="public/svg/tasknest/filter.svg"
                  alt="filter"
                  className="sort-list__img"
                />
                <button className="btn-top-sort">Filter</button>
              </li>
              <li className="sort-list__item">
                <img
                  src="public/svg/tasknest/sortsvg.svg"
                  alt="sort"
                  className="sort-list__img"
                />
                <button className="btn-top-sort">Sort</button>
              </li>
            </ul>
          </div>
        </section>
        <div className="content-block-task">
          <aside className="nav-tool">
            <div className="nav-tool__block">
              <nav className="nav-aside">
                <ul className="nav-aside__list">
                  <li className="nav-aside__item">
                    <button className="btn-aside">
                      <svg
                        width={14.0}
                        height={14.0}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs>
                          <clipPath id="clip31_233">
                            <rect
                              id="inbox"
                              width={14.0}
                              height={14.0}
                              fill="white"
                              fillOpacity={0}
                            />
                          </clipPath>
                        </defs>
                        <g clipPath="url(#clip31_233)">
                          <path
                            id="inbox"
                            fill="#FFFFFF"
                            d="M3.96753 1.62378C4.77454 0.83667 5.8656 0.397461 7 0.397461C8.1344 0.397461 9.22546 0.83667 10.0325 1.62378C10.84 2.41113 11.2966 3.48267 11.2966 4.60327C11.2966 6.58643 11.7314 7.81396 12.1294 8.52539C12.3293 8.88281 12.5238 9.11694 12.6583 9.25562C12.7258 9.32495 12.7786 9.37085 12.8101 9.39624C12.8258 9.40918 12.8362 9.41675 12.8405 9.41992L12.8417 9.4209C13.0737 9.57642 13.1782 9.86523 13.0985 10.134C13.0181 10.4058 12.7684 10.592 12.485 10.592L1.51501 10.592C1.23157 10.592 0.981934 10.4058 0.901489 10.134C0.821777 9.86523 0.92627 9.57642 1.15833 9.4209L1.15955 9.41992C1.16382 9.41675 1.17419 9.40918 1.18994 9.39624C1.22144 9.37085 1.27417 9.32495 1.34167 9.25562C1.4762 9.11694 1.67065 8.88281 1.87061 8.52539C2.26855 7.81396 2.70337 6.58643 2.70337 4.60327C2.70337 3.48267 3.16003 2.41113 3.96753 1.62378ZM2.89343 9.31226L11.1066 9.31226C11.0751 9.26025 11.0437 9.2063 11.0123 9.15015C10.4961 8.22729 10.0167 6.78027 10.0167 4.60327C10.0167 3.83252 9.70288 3.09009 9.13892 2.54004C8.57434 1.9895 7.80518 1.67725 7 1.67725C6.19482 1.67725 5.42566 1.9895 4.86108 2.54004C4.29712 3.09009 3.98328 3.83252 3.98328 4.60327C3.98328 6.78027 3.50391 8.22729 2.98767 9.15015C2.9563 9.2063 2.92493 9.26025 2.89343 9.31226ZM5.88623 11.875C5.70142 11.5564 5.29333 11.4478 4.97473 11.6326C4.65613 11.8174 4.54761 12.2256 4.73242 12.5442C4.95862 12.9341 5.2832 13.2576 5.67371 13.4827C6.06421 13.7075 6.50696 13.8259 6.95764 13.8259C7.40833 13.8259 7.85107 13.7075 8.24158 13.4827C8.63208 13.2576 8.95667 12.9341 9.18286 12.5442C9.36768 12.2256 9.25916 11.8174 8.94055 11.6326C8.62195 11.4478 8.21387 11.5564 8.02905 11.875C7.92017 12.0625 7.76392 12.2185 7.57581 12.3267C7.38782 12.4351 7.17468 12.4919 6.95764 12.4919C6.7406 12.4919 6.52747 12.4351 6.33948 12.3267C6.15137 12.2185 5.99512 12.0625 5.88623 11.875Z"
                            clipRule="evenodd"
                            fillOpacity={1.0}
                            fillRule="evenodd"
                          />
                        </g>
                      </svg>
                      Inbox
                    </button>
                  </li>
                  <li className="nav-aside__item">
                    <button className="btn-aside btn-aside_active">
                      <svg
                        width="12.830444"
                        height="12.830322"
                        viewBox="0 0 12.8304 12.8303"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          id="tasks"
                          fill="#FFFFFF"
                          d="M1.16 6.41C1.16 3.51 3.51 1.16 6.41 1.16C9.31 1.16 11.66 3.51 11.66 6.41C11.66 9.31 9.31 11.66 6.41 11.66C3.51 11.66 1.16 9.31 1.16 6.41ZM6.41 0C2.87 0 0 2.87 0 6.41C0 9.95 2.87 12.83 6.41 12.83C9.95 12.83 12.83 9.95 12.83 6.41C12.83 2.87 9.95 0 6.41 0ZM9.74 4.63C9.97 4.41 9.97 4.04 9.74 3.81C9.51 3.58 9.14 3.58 8.92 3.81L5.32 7.41L3.91 6C3.68 5.77 3.31 5.77 3.08 6C2.86 6.23 2.86 6.59 3.08 6.82L4.91 8.64C5.13 8.87 5.5 8.87 5.73 8.64L9.74 4.63Z"
                          fillOpacity={1.0}
                          fillRule="evenodd"
                        />
                      </svg>
                      My tasks
                    </button>
                  </li>
                  <li className="nav-aside__item">
                    <button className="btn-aside">
                      <svg
                        width="10.497070"
                        height="12.830322"
                        viewBox="0 0 10.4971 12.8303"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          id="reports"
                          fill="#FFFFFF"
                          d="M1.74 0C1.28 0 0.84 0.18 0.51 0.51C0.18 0.84 0 1.28 0 1.74L0 11.08C0 11.54 0.18 11.99 0.51 12.31C0.84 12.64 1.28 12.83 1.74 12.83L8.74 12.83C9.21 12.83 9.65 12.64 9.98 12.31C10.31 11.99 10.49 11.54 10.49 11.08L10.49 4.66C10.49 4.5 10.43 4.35 10.32 4.25L10.32 4.25L6.24 0.17L6.24 0.17C6.13 0.06 5.98 0 5.83 0L1.74 0ZM5.25 1.16L1.74 1.16C1.59 1.16 1.44 1.22 1.33 1.33C1.22 1.44 1.16 1.59 1.16 1.74L1.16 11.08C1.16 11.23 1.22 11.38 1.33 11.49C1.44 11.6 1.59 11.66 1.74 11.66L8.74 11.66C8.9 11.66 9.05 11.6 9.16 11.49C9.27 11.38 9.33 11.23 9.33 11.08L9.33 5.24L5.83 5.24C5.51 5.24 5.25 4.98 5.25 4.66L5.25 1.16ZM8.51 4.08L6.41 1.98L6.41 4.08L8.51 4.08Z"
                          fillOpacity={1.0}
                          fillRule="evenodd"
                        />
                      </svg>
                      Reports
                    </button>
                  </li>
                </ul>
                <div className="tools-block">
                  <p className="tools">Tools:</p>
                  <Link
                    to="/Calculator"
                    className="tools__link btn-aside"
                    target="_blank"
                  >
                    <svg
                      id="calculator"
                      fill="#ffffff"
                      height="800px"
                      width="800px"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 368 368"
                      xmlSpace="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <g>
                            <g>
                              <path d="M328,16H40C18,16,0,34,0,56v256c0,22,18,40,40,40h288c22,0,40-18,40-40V56C368,34,350,16,328,16z M352,312 c0,13.2-10.8,24-24,24H40c-13.2,0-24-10.8-24-24V56c0-13.2,10.8-24,24-24h288c13.2,0,24,10.8,24,24V312z" />
                              <path d="M144,112h-32V80c0-4.4-3.6-8-8-8c-4.4,0-8,3.6-8,8v32H64c-4.4,0-8,3.6-8,8c0,4.4,3.6,8,8,8h32v32c0,4.4,3.6,8,8,8 c4.4,0,8-3.6,8-8v-32h32c4.4,0,8-3.6,8-8C152,115.6,148.4,112,144,112z" />
                              <path d="M296,112h-80c-4.4,0-8,3.6-8,8c0,4.4,3.6,8,8,8h80c4.4,0,8-3.6,8-8C304,115.6,300.4,112,296,112z" />
                              <path d="M137.6,214c-3.2-3.2-8.4-3.2-11.2,0L104,236.8L81.6,214c-3.2-3.2-8-3.2-11.2,0s-3.2,8,0,11.2L93.2,248l-22.8,22.8 c-3.2,3.2-3.2,8,0,11.2c1.6,1.6,3.6,2.4,5.6,2.4s4-0.8,5.6-2.4l22.4-22.8l22.4,22.8c1.6,1.6,3.6,2.4,5.6,2.4s4-0.8,5.6-2.4 c3.2-3.2,3.2-8,0-11.2L115.2,248l22.8-22.8C140.8,222,140.8,217.2,137.6,214z" />
                              <path d="M296,256h-80c-4.4,0-8,3.6-8,8c0,4.4,3.6,8,8,8h80c4.4,0,8-3.6,8-8C304,259.6,300.4,256,296,256z" />
                              <path d="M296,208h-80c-4.4,0-8,3.6-8,8c0,4.4,3.6,8,8,8h80c4.4,0,8-3.6,8-8C304,211.6,300.4,208,296,208z" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    Calculator
                  </Link>
                </div>
              </nav>
            </div>
          </aside>
          <main className="tasks">
            <form className="form-add">
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={addTaskEnter}
                className="input-add-task"
                placeholder="Write a task..."
              />
              <button onClick={addTask} type="button" className="btn-add-task">
                Add
              </button>
            </form>
            <ul className="tasks-block">
              {tasks.map((task) => (
                <li
                  className={`task-item-block + ${
                    task.state ? "task-item-block__text_checked" : ""
                  }`}
                  key={task.id}
                >
                  <div className="task-item-block__content">
                    <label className="task-item-block__checkbox">
                      <input
                        type="checkbox"
                        className="checkbox"
                        onChange={() => changeState(task.id)}
                        checked={task.state}
                      />
                      <div className="checkbox-div"></div>
                    </label>
                    <p className="task-item-block__text">{task.text}</p>
                    <div className="btn-block">
                      <button
                        className="btn-delete-task"
                        onClick={() => deleteTask(task.id)}
                      ></button>
                      <img
                        src="public/svg/tasknest/task.svg"
                        alt=""
                        className="task-item-block__img"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </div>
    </main>
  );
}

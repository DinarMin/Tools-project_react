import { Outlet } from "react-router-dom";
import { useState } from "react";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import Modal from "./components/modal/Modal";

export const Layout = () => {
  const [modalActive, setModalActive] = useState(false);

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  /* Функциональность формы регистрации  */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Отправка на сервер прошла успешна");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header onClickModal={toggleModal} />
      <Modal active={modalActive} onClickModal={toggleModal}>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <span className="error"></span>
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className="error"></span>
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <span className="error"></span>
          </div>
          <button type="submit" className="btn btn_sign-up">
            Register
          </button>
        </form>
      </Modal>
      <Outlet />
      <Footer />
    </>
  );
};

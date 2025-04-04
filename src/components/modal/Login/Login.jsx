import { useState } from "react";
import Modal from "../Modal";

const Login = ({ onClickModal, active }) => {
  const [formData, setFormData] = useState({
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
      setFormData({
        email: "",
        password: "",
      });
      const data = await response.json(); // Зачем: Получаем ответ.
      if (data.token) { // Зачем: Проверяем, есть ли токен.
        localStorage.setItem('token', data.token); // Зачем: Сохраняем токен.
        console.log('Login successful:', data.token);
      } else {
        console.log('Login failed:', data.error);
      }
    } catch (err) {
      console.log("Ошибка отправки на сервер " + err);
    }
  };

  return (
    <Modal onClickModal={onClickModal} active={active}>
      <form onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
    </Modal>
  );
};

export default Login;

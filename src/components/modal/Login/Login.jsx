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
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log("Login successful:", data.token);
      } else {
        console.log("Login failed:", data.error);
      }
    } catch (err) {
      console.log("Ошибка отправки на сервер " + err);
    }
  };

  return (
    <Modal onClickModal={onClickModal} active={active}>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input
            type="email"
            defaultValue={formData.email}
            onChange={handleChange}
            placeholder="Enter email "
          />
          <span />
        </div>
        <div className="input-container">
          <input
            type="password"
            defaultValue={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="submit">
          Sign in
        </button>
      </form>
    </Modal>
  );
};

export default Login;

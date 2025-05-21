import { useState } from "react";
import Modal from "../Modal";

const SignUp = ({ onClickModal, active }) => {
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
      await fetch("http://localhost:3000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("Отправка на сервер прошла успешна");
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.log("Ошибка отправки на сервер " + err);
    }
  };
  return (
    <Modal onClickModal={onClickModal} active={active}>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Create a new account</p>
        <div className="input-container">
          <input
            type="text"
            defaultValue={formData.name}
            onChange={handleChange}
            placeholder="Enter Name "
          />
          <span />
        </div>
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
          Sign up
        </button>
      </form>
    </Modal>
  );
};

export default SignUp;

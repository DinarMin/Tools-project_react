import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import User from "./models/User.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.listen(3000, () => console.log("Server on port 3000"));

/* Подключение к базы данных */

async function startDB() {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("Успешно подключена к базам данных");
  } catch (e) {
    console.log(e + "Подключение прервано");
  }
}

startDB();

/* Принимает данные */

app.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name) {
      // При регистрации принимает данные и сохраняет в БД
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password: hashedPassword });
      await user.save();
      res.json({ message: "User registered" });
    } else {
      // При авторизации принимает данные и проверяет и назначает token
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Неверный пароль или логин!" });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ token });
    }
    console.log("");
  } catch (error) {
    res.json({ error });
    console.log("Произошла ошибка ->" + error);
  }
});

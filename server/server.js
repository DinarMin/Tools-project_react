import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import User from "./models/User.js";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, () => console.log("Server on port 3000"));

/* Подключение к базы данных */

async function startDB() {
  try {
    const url =
      "mongodb+srv://dinar2202:SK58fdpWsGOWW6lN@cluster0.ujvlwdp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(url);
    console.log("Успешно подключена к базам данных");
  } catch (e) {
    console.log(e + "Подключение прервано");
  }
}

startDB();

/* Принимает данные при регистрации и сохраняет в БД */

app.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  res.json({ message: "User registered" });
});

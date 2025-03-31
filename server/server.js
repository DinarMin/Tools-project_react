import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.get("/api/test", (req, res) => res.json({ message: "API works!" }));
app.listen(3000, () => console.log("Server on port 3000"));
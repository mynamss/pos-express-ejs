import express from "express";
import router from "./routes/index.js";
import { config } from "dotenv";
config();

// database with typeorm
import "./configs/database.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// views
app.set("view engine", "ejs");
app.set("views", "src/views/");

app.use("/api", router);

app.listen(PORT, () => console.log(`Server running on ::${PORT}`));

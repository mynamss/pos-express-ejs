import { config } from "dotenv";
config();

import { DataSource } from "typeorm";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;


const dataSource = new DataSource({
	type: "postgres",
	host: DB_HOST,
	port: DB_PORT,
	username: DB_USER,
	password: `${DB_PASSWORD}`,
	database: DB_NAME,
	entities: [path.join(__dirname, "/../entity/*.js")],
	migrations: [path.join(__dirname, "/../migrations/*.js")],
});

dataSource
	.initialize()
	.then(() => console.log("Database connected."))
	.catch((err) => console.log("Failed to connect database.", err));

export default dataSource;

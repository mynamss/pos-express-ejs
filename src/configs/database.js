import { config } from "dotenv";
config();

import { DataSource } from "typeorm";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;


const dataSource = new DataSource({
	type: "postgres",
	host: DB_HOST,
	port: DB_PORT,
	username: DB_USER,
	password: `${DB_PASSWORD}`,
	database: DB_NAME,
});

dataSource
	.initialize()
	.then(() => console.log("Database connected."))
	.catch((err) => console.log("Failed to connect database.", err));

export default dataSource;

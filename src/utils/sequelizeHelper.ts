import { Sequelize } from "sequelize";

const { SEQUELIZE_DIALECT, SEQUELIZE_PORT, SEQUELIZE_DATABASE_NAME, SEQUELIZE_DATABASE_USERNAME, SEQUELIZE_DATABASE_PASSWORD } =
	process.env;

const sequelize = new Sequelize({
	dialect: "postgres",
	port: 8000,
	database: "thedevdesigner",
});

export default sequelize;


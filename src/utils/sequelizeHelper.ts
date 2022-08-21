import { Sequelize } from "sequelize";
import logger from "./logger";

const sequelize = new Sequelize({
	dialect: "postgres",
	port: 8000,
	logging: logger.debug.bind(logger),
	database: "thedevdesigner",
});

export default sequelize;


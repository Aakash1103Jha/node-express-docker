import { Sequelize } from "sequelize";
import dev from "./logger/dev";

const sequelize = new Sequelize({
	dialect: "postgres",
	port: 8000,
	logging: dev.debug.bind(dev),
	database: "thedevdesigner",
});

export default sequelize;


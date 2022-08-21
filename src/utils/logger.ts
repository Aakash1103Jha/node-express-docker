import { createLogger, format, transports } from "winston";
import { resolve } from "path";

const logger = createLogger({
	level: "info",
	format: format.json(),
	transports: [
		new transports.File({ filename: "error.log", level: "error", dirname: resolve(__dirname, "..", "logs") }),
		new transports.File({ filename: "combined.log", dirname: resolve(__dirname, "..", "logs") }),
	],
});

export default logger;


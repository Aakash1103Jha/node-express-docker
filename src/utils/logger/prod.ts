import { createLogger, format, transports } from "winston";
import { resolve } from "path";

const prod = createLogger({
	level: "debug",
	format: format.combine(format.timestamp(), format.errors({ stack: true }), format.json()),
	transports: [
		new transports.Console(),
		new transports.File({ filename: "error.log", level: "error", dirname: resolve(__dirname, "..", "..", "logs") }),
		new transports.File({ filename: "combined.log", level: "debug", dirname: resolve(__dirname, "..", "..", "logs") }),
	],
});

export default prod;


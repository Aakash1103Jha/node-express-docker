import { createLogger, format, transports } from "winston";

const logFormat = format.printf(({ level, message, timestamp, stack }) => `${timestamp}: ${level} - ${stack || message}`);

const dev = createLogger({
	level: "debug",
	format: format.combine(
		format.colorize({ colors: { info: "blue", error: "red", warn: "yellow" } }),
		format.timestamp({ format: "DD/MM/YYYY || HH:mm:ss" }),
		format.errors({ stack: true }),
		logFormat,
	),
	transports: [new transports.Console()],
});

export default dev;


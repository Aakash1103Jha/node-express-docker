require("dotenv/config");
require("regenerator-runtime");

import { transports, format } from "winston";

import { app, logger } from "./utils";

const PORT: string | number = process.env.PORT || 4000;
const { NODE_ENV } = process.env;

const server = app.listen(PORT, () => console.info(`Server running on port ${PORT}`));

if (NODE_ENV !== "production") {
	logger.add(
		new transports.Console({
			format: format.colorize({ colors: { info: "blue", error: "red" } }),
		}),
	);
}

export default server;


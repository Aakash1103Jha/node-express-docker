import dev from "./dev";
import prod from "./prod";

const { NODE_ENV } = process.env;

const logger = () => {
	if (NODE_ENV === "development") {
		return dev;
	}
	return prod;
};

export default logger;


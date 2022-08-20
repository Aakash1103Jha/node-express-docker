import { connect, connection, MongooseError } from "mongoose";

const DBHelper = {
	createMongoConnection: async (uri: string) => {
		try {
			connect(uri, () => console.info(`MongoDB Connected!`));
		} catch (error) {
			const { message, name } = error as MongooseError;
			console.error({ name, message });
		}
	},
	closeMongoConnection: async () => {
		return await connection.close();
	},
};

export default DBHelper;


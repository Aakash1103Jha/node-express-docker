import { DataTypes, Model } from "sequelize";
import { sequelize } from "../utils";

interface IUser {
	firstName: string;
	lastName: string;
}

const User = sequelize.define<Model<IUser>>("users", {
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

export default User;


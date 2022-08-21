import express, { Application, Request, Response } from "express";
import cors from "cors";
import { randomBytes } from "crypto";
import logger from "./logger";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.disable("x-powered-by");

app.get("/welcome", async (req: Request, res: Response) => {
	const randomId = randomBytes(10).toString("hex");
	const message = "This app is running inside a Docker container";
	res.status(200).json({ message, randomId });
	return logger().info(`Incoming IP: ${req.ip}`);
});

export default app;


import express, { Application, Request, Response } from "express";
import cors from "cors";
import { randomBytes } from "crypto";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.disable("x-powered-by");

app.get("/welcome", async (req: Request, res: Response) => {
	res.status(200).json({ message: "This app is running inside a Docker container", randomId: randomBytes(10).toString("hex") });
});

export default app;


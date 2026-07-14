import express from "express";
import "dotenv/config";
import type { Application, Request, Response } from "express";
import * as path from "path";
import { fileURLToPath } from "url";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// * Set View engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "ok",
  });
});

export default app;

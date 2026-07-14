import express from "express";
import "dotenv/config";
import type { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "ok",
  });
});

export default app;

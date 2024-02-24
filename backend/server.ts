import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Database } from "./src/config/database";

dotenv.config();



const app: Express = express();
const port = process.env.PORT || 3001;

const db = new Database();

db.dbconnect();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
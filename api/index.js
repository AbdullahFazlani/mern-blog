import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();
const app = express();

connectDB();

app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});

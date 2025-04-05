import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "api is running" });
});

app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});

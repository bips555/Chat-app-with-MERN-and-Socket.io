import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectdb from "./mongodatabase/db.config.js";
const app = express();

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);
// to generalize the routes with the above routing convention

// to parse the incoming requests into json format

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connectdb();
  console.log(`server is running on port ${PORT}`);
});

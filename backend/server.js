import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectdb from "./mongodatabase/db.config.js";
const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
// to generalize the routes with the above routing convention

// to parse the incoming requests into json format

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connectdb();
  console.log(`server is running on port ${PORT}`);
});

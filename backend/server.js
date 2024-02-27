import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectdb from "./mongodatabase/db.config.js";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    connectdb();
    console.log(`server is running on port ${PORT}`)
});

app.use("/api/auth",authRoutes);
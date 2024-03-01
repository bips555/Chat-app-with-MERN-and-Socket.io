import express from "express";
import { sendMessageController } from "../controllers/message.controller.js";
import { protectRoute } from "../middlewares/protectroute.js";

const router = express.Router();

router.post("/send/:id",protectRoute,sendMessageController);

export default router;
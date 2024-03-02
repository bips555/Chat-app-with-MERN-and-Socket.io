import express from "express";
import {
  sendMessageController,
  getMessageContoller,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middlewares/protectroute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessageContoller);

router.post("/send/:id", protectRoute, sendMessageController);

export default router;

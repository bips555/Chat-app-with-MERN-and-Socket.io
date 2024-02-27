import express from "express";
import { loginController,signupController } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup",signupController);
router.get("/login",loginController);

export default router;
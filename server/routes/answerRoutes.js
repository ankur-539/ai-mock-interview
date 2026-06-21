import express from "express";

import { verifyToken } from "../middleware/auth.js";

import { submitAnswer } from "../controllers/answerController.js";

const router = express.Router();

router.post("/submit", verifyToken, submitAnswer);

export default router;
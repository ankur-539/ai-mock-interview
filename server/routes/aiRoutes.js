import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { evaluateAnswer } from "../controllers/aiController.js";

const router = express.Router();

router.post("/feedback", verifyToken, evaluateAnswer);

export default router;
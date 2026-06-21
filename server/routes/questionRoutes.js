import express from "express";
import {
  addQuestion,
  getQuestions,
  randomQuestions,
} from "../controllers/questionController.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Add Question
router.post("/add", verifyToken, addQuestion);

// Get All Questions by Category & Difficulty
router.get("/list", verifyToken, getQuestions);

// Get Random 10 Questions
router.get("/random", verifyToken, randomQuestions);

export default router;
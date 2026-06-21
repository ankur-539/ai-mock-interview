import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getResult } from "../controllers/resultController.js";

const router = express.Router();

router.get("/:interviewId", verifyToken, getResult);

export default router;
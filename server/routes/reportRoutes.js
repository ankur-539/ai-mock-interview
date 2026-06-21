import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { downloadReport } from "../controllers/reportController.js";

const router = express.Router();

router.get("/:interviewId", verifyToken, downloadReport);

export default router;
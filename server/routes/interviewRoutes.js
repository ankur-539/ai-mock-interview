import express from "express";

import { verifyToken } from "../middleware/auth.js";

import { startInterview, getHistory, completeInterview } from "../controllers/interviewController.js";


const router = express.Router();

router.post("/start", verifyToken, startInterview);

router.get("/history", verifyToken, getHistory);

router.put(
  "/complete/:interviewId",
  verifyToken,
  completeInterview
);

export default router;
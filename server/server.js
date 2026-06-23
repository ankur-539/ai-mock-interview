import resultRoutes from "./routes/resultRoutes.js";
import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
configDotenv();

import mydatabase from "./connections/databaseconnect.js";
import authRoutes from "./routes/authRoutes.js";
import interviewRoutes from "./routes/interviewRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";
import answerRoutes from "./routes/answerRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Mock Interview Backend Running"
  });
});

app.use("/api", authRoutes);

app.use("/api/interview", interviewRoutes);

app.use("/api/question", questionRoutes);

app.use("/api/answer", answerRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/result", resultRoutes);

app.use("/api/report", reportRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
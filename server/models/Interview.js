import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },

    category: String,

    difficulty: String,

    totalQuestions: Number,

    score: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      default: "started",
    },
  },
  {
    timestamps: true,
  }
);

export const Interview = mongoose.model(
  "interviews",
  interviewSchema
);
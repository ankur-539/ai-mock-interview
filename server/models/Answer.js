import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    interviewId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "interviews",
    },

    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "questions",
    },

    userAnswer: String,

    aiFeedback: String,

    aiScore: Number,
  },
  {
    timestamps: true,
  }
);

export const Answer = mongoose.model(
  "answers",
  answerSchema
);
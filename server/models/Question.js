import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },

    question: {
      type: String,
      required: true,
      unique: true
    },

    expectedAnswer: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const Question = mongoose.model("questions", questionSchema);
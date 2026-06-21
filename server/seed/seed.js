import mongoose from "mongoose";
import dotenv from "dotenv";
import reactQuestions from "./reactQuestions.js";
import javascriptQuestions from "./javascriptQuestions.js";
import htmlQuestions from "./htmlQuestions.js";
import cssQuestions from "./cssQuestions.js";
import nodeQuestions from "./nodeQuestions.js";
import { Question } from "../models/Question.js";

dotenv.config();

const seed = async () => {
  await mongoose.connect(process.env.DATABASE);

  await Question.deleteMany({});

  await Question.insertMany([
    ...reactQuestions,
    ...javascriptQuestions,
    ...htmlQuestions,
    ...cssQuestions,
    ...nodeQuestions,
  ]);

  console.log("✅ 250 Questions Inserted Successfully");

  process.exit();
};

seed();
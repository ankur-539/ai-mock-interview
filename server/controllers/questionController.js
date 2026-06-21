import { Question } from "../models/Question.js";

export const addQuestion = async (req, res) => {
  try {

    const { category, difficulty, question, expectedAnswer } = req.body;

    const data = await Question.create({
      category,
      difficulty,
      question,
      expectedAnswer,
    });

    res.status(201).json({
      success: true,
      message: "Question Added",
      data,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

export const getQuestions = async (req, res) => {

  try {

    const { category, difficulty } = req.query;

    const questions = await Question.find({
      category,
      difficulty,
    });

    res.json({
      success: true,
      total: questions.length,
      questions,
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};

export const randomQuestions = async (req, res) => {
  try {
    const { category, difficulty } = req.query;

    const questions = await Question.aggregate([
      {
        $match: {
          category,
          difficulty,
        },
      },
      {
        $sample: {
          size: 10,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      questions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
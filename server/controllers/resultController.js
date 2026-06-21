import { Answer } from "../models/Answer.js";

export const getResult = async (req, res) => {
  try {

    const { interviewId } = req.params;

    const answers = await Answer.find({
      interviewId,
    }).populate("questionId");

    let totalScore = 0;

    answers.forEach((item) => {
      totalScore += item.aiScore || 0;
    });

    const averageScore =
      answers.length > 0
        ? totalScore / answers.length
        : 0;

    res.json({
      success: true,
      totalQuestions: answers.length,
      totalScore,
      averageScore,
      answers,
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};
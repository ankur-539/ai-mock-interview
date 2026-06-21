import { Interview } from "../models/Interview.js";
import { Question } from "../models/Question.js";

export const startInterview = async (req, res) => {

    try {

        const { category, difficulty } = req.body;

        const questions = await Question.aggregate([
            {
                $match: {
                    category,
                    difficulty
                }
            },
            {
                $sample: {
                    size: 10
                }
            }
        ]);

        const interview = await Interview.create({

            userId: req.user.id,

            category,

            difficulty,

            totalQuestions: questions.length,

            status: "started"

        });

        res.status(200).json({

            success: true,

            interviewId: interview._id,

            questions

        });

    } catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

}

export const getHistory = async (req, res) => {
  try {

    const interviews = await Interview.find({
      userId: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      interviews,
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};

export const completeInterview =
  async (req, res) => {

    try {

      const { interviewId } =
        req.params;

      await Interview.findByIdAndUpdate(
        interviewId,
        {
          status: "completed",
        }
      );

      res.json({
        success: true,
      });

    } catch (err) {

      res.status(500).json({
        message: err.message,
      });

    }

  };
import { Answer } from "../models/Answer.js";
import { Interview } from "../models/Interview.js";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const submitAnswer = async (req, res) => {
  try {
    const {
      interviewId,
      questionId,
      userAnswer,
    } = req.body;

    const completion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `
Score this answer from 1 to 10.

Answer:
${userAnswer}

Return format:
Score: X
Feedback: Your feedback
`,
          },
        ],
        model: "llama-3.3-70b-versatile",
      });

    const responseText =
      completion.choices[0].message.content;

    const scoreMatch =
      responseText.match(/\b([1-9]|10)\b/);

    const score = scoreMatch
      ? Number(scoreMatch[0])
      : 5;

    const data = await Answer.create({
      interviewId,
      questionId,
      userAnswer,
      aiFeedback: responseText,
      aiScore: score,
    });

    // Update Interview Total Score
    const interview =
      await Interview.findById(interviewId);

    if (interview) {
      await Interview.findByIdAndUpdate(
        interviewId,
        {
          score:
            (interview.score || 0) +
            score,
        }
      );
    }

    res.status(201).json({
      success: true,
      message: "Answer Submitted",
      data,
    });

  } catch (err) {

    console.log(
      "GROQ ERROR =>",
      err
    );

    res.status(500).json({
      message: err.message,
    });

  }
};
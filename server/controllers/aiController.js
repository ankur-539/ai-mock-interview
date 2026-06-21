import axios from "axios";

export const evaluateAnswer = async (req, res) => {
  try {

    const { question, answer } = req.body;

    const prompt = `
You are a senior MERN stack interviewer.

Question:
${question}

Candidate Answer:
${answer}

Evaluate this answer.

Return JSON only:

{
  "score":8,
  "feedback":"Good answer",
  "improvement":"Explain Virtual DOM with example."
}
`;

    const response = await axios.post(

      "https://api.groq.com/openai/v1/chat/completions",

      {
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      success: true,
      data: response.data.choices[0].message.content,
    });

  } catch (err) {

    console.log(err.response?.data);

    res.status(500).json({
      message: err.response?.data || err.message,
    });

  }
};
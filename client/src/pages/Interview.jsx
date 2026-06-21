import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import api from "../services/api";

function Interview() {
  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("interviewData")
    );

    if (data?.questions) {
      setQuestions(data.questions);
    }
  }, []);

  const submitAnswer = async () => {
    try {
      const interviewData = JSON.parse(
        localStorage.getItem("interviewData")
      );

      const res = await api.post(
        "/answer/submit",
        {
          interviewId: interviewData.interviewId,
          questionId:
            questions[currentQuestion]._id,
          userAnswer: answer,
        }
      );

      console.log("Answer Saved:", res.data);

    } catch (err) {
      console.log("Submit Error:", err);
    }
  };

  const nextQuestion = async () => {

    await submitAnswer();

    setAnswer("");

    if (
      currentQuestion <
      questions.length - 1
    ) {

      setCurrentQuestion(
        currentQuestion + 1
      );

    } else {

  const interviewData =
    JSON.parse(
      localStorage.getItem(
        "interviewData"
      )
    );

  await api.put(
    `/interview/complete/${interviewData.interviewId}`
  );

  navigate("/result");

}
  };

  if (questions.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-[700px]">

        <div className="flex justify-between mb-6">

          <h2 className="font-bold text-xl">
            Question {currentQuestion + 1} / {questions.length}
          </h2>

          <Timer />

        </div>

        <QuestionCard
          question={questions[currentQuestion]}
          answer={answer}
          setAnswer={setAnswer}
        />

        <button
          onClick={nextQuestion}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded"
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default Interview;
import { useEffect, useState } from "react";
import api from "../services/api";

function Result() {
  const [result, setResult] = useState(null);

  const downloadReport = async () => {
    try {
      const interviewData = JSON.parse(
        localStorage.getItem("interviewData")
      );

      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:6789/api/report/${interviewData.interviewId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to download report");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = "Interview_Report.pdf";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);

    } catch (err) {
      console.log(err);
      alert("PDF Download Failed");
    }
  };

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const interviewData = JSON.parse(
          localStorage.getItem("interviewData")
        );

        const res = await api.get(
          `/result/${interviewData.interviewId}`
        );

        setResult(res.data);

      } catch (err) {
        console.log(err);
      }
    };

    fetchResult();
  }, []);

  if (!result) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white p-6 rounded-xl shadow-lg mb-6">

          <h1 className="text-3xl font-bold mb-4 text-center">
            Interview Result
          </h1>

          <div className="grid grid-cols-3 gap-4 text-center">

            <div className="bg-blue-100 p-4 rounded">
              <h3 className="font-bold">Questions</h3>
              <p>{result.totalQuestions}</p>
            </div>

            <div className="bg-green-100 p-4 rounded">
              <h3 className="font-bold">Total Score</h3>
              <p>{result.totalScore}</p>
            </div>

            <div className="bg-yellow-100 p-4 rounded">
              <h3 className="font-bold">Average</h3>
              <p>{result.averageScore?.toFixed(1)}</p>
            </div>

          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={downloadReport}
              className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700"
            >
              Download PDF Report
            </button>
          </div>

        </div>

        <h2 className="text-2xl font-bold mb-4">
          Question Wise Analysis
        </h2>

        {result.answers.map((item, index) => (
          <div
            key={item._id}
            className="bg-white p-5 rounded-xl shadow mb-4"
          >

            <h3 className="font-bold text-lg mb-3">
              Question {index + 1}
            </h3>

            <p className="mb-3">
              <strong>Question:</strong>{" "}
              {item.questionId?.question}
            </p>

            <p className="mb-3">
              <strong>Your Answer:</strong>{" "}
              {item.userAnswer}
            </p>

            <p className="mb-3">
              <strong>Score:</strong>{" "}
              {item.aiScore}/10
            </p>

            <p className="break-words">
              <strong>AI Feedback:</strong>{" "}
              {item.aiFeedback}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Result;
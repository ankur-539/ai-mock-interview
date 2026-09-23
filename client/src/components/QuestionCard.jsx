
import { useState } from "react";

function QuestionCard({
  question,
  answer,
  setAnswer,
}) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        {question.question}
      </h2>

      <textarea
        rows="6"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write your answer..."
        className="w-full border p-3 rounded"
      />

      {/* Hint Button */}
      <button
        type="button"
        onClick={() => setShowHint((prev) => !prev)}
        className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-5 py-2 rounded"
      >
        {showHint ? "Hide Hint" : "Show Hint"}
      </button>

      {/* Expected Answer */}
      {showHint && (
        <div className="mt-4 rounded-lg border border-yellow-400 bg-yellow-50 p-4 text-gray-800">
          <h3 className="font-bold mb-2">
            Answer Hint
          </h3>

          <p className="whitespace-pre-wrap">
            {question.expectedAnswer ||
              "No hint available for this question."}
          </p>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
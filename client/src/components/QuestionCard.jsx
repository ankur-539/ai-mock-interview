function QuestionCard({
  question,
  answer,
  setAnswer
}) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        {question.question}
      </h2>

      <textarea
        rows="6"
        value={answer}
        onChange={(e) =>
          setAnswer(e.target.value)
        }
        placeholder="Write your answer..."
        className="w-full border p-3 rounded"
      />

    </div>
  );
}

export default QuestionCard;
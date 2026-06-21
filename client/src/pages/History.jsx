import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function History() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await api.get(
          "/interview/history"
        );

        setHistory(
          res.data.interviews
        );

      } catch (err) {

        console.log(err);

      }
    };

    fetchHistory();
  }, []);

  const viewResult = (item) => {

    localStorage.setItem(
      "interviewData",
      JSON.stringify({
        interviewId: item._id,
      })
    );

    navigate("/result");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Interview History
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead>

              <tr className="bg-gray-200">

                <th className="p-4">
                  Category
                </th>

                <th className="p-4">
                  Difficulty
                </th>

                <th className="p-4">
                  Questions
                </th>

                <th className="p-4">
                  Score
                </th>

                <th className="p-4">
                  Status
                </th>

                <th className="p-4">
                  Date
                </th>

                <th className="p-4">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {history.map((item) => (

                <tr
                  key={item._id}
                  className="border-t text-center hover:bg-gray-50"
                >

                  <td className="p-4">
                    {item.category}
                  </td>

                  <td className="p-4">
                    {item.difficulty}
                  </td>

                  <td className="p-4">
                    {item.totalQuestions}
                  </td>

                  <td className="p-4 font-semibold">
                    {item.score}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        item.status === "completed"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="p-4">
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">

                    <button
                      onClick={() =>
                        viewResult(item)
                      }
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      View Result
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default History;
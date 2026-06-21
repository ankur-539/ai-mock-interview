import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Dashboard() {
    const navigate = useNavigate();

    const [category, setCategory] = useState("React");
    const [difficulty, setDifficulty] = useState("Easy");

    const startInterview = async () => {
        try {
            const res = await api.post("/interview/start", {
                category,
                difficulty,
            });

            localStorage.setItem(
                "interviewData",
                JSON.stringify(res.data)
            );

            navigate("/interview");

        } catch (err) {
            console.log(err);
            alert("Interview Start Failed");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-lg w-96">

                <h1 className="text-3xl font-bold text-center mb-2">
                    AI Mock Interview
                </h1>

                <p className="text-gray-500 text-center mb-6">
                    Practice technical interviews with AI
                </p>

                <label className="font-medium">
                    Select Category
                </label>

                <select
                    className="w-full border p-3 rounded mb-4 mt-1"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>React</option>
                    <option>JavaScript</option>
                    <option>HTML</option>
                    <option>CSS</option>
                    <option>Node.js</option>
                </select>

                <label className="font-medium">
                    Select Difficulty
                </label>

                <select
                    className="w-full border p-3 rounded mb-6 mt-1"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                >
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>

                <button
                    onClick={startInterview}
                    className="w-full bg-blue-600 text-white p-3 rounded mb-3 hover:bg-blue-700"
                >
                    Start Interview
                </button>

                <button
                    onClick={() => navigate("/history")}
                    className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
                >
                    Interview History
                </button>

                <button
                    onClick={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("interviewData");
                        navigate("/");
                    }}
                    className="w-full bg-red-600 text-white p-3 rounded mt-3"
                >
                    Logout
                </button>

            </div>

        </div>
    );
}

export default Dashboard;
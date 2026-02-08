import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/");
          return;
        }

        const res = await axios.get(
          "http://localhost:5000/api/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(res.data);
      } catch (err) {
        console.error(err);
        localStorage.removeItem("token");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const resumePythonCourse = () => {
    const currentLesson =
      localStorage.getItem("python-current-lesson") || "datatypes";
    navigate(`/course/${currentLesson}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] text-white">
        Loading...
      </div>
    );
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-[#0b0f19] text-white">
        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
          <div>
            <p className="text-sm text-gray-400">Welcome</p>
            <h1 className="text-xl font-semibold">
              {user?.name || "Student"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-sm"
            >
              Logout
            </button>
          </div>
        </nav>

        {/* MAIN */}
        <main className="px-8 py-10">
          <h2 className="text-xl font-semibold mb-6">
            Your Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              onClick={resumePythonCourse}
              className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 cursor-pointer
                         hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  Python Programming
                </h3>
                <span className="text-xs bg-blue-600 px-2 py-1 rounded">
                  Beginner
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-6">
                Learn Python interactively with real-time execution.
              </p>

              <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded">
                Resume Course →
              </button>
            </div>
          </div>
        </main>
      </div>
    </AppLayout>
  );
}

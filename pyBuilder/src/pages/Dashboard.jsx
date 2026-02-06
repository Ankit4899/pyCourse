// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const navigate = useNavigate();

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-6">Courses</h1>

//       <div
//         onClick={() => navigate("/course/python")}
//         className="cursor-pointer p-6 border rounded hover:shadow-lg"
//       >
//         <h2 className="text-xl font-semibold">Python Programming</h2>
//         <p className="text-gray-600">
//           Learn Python step by step with interactive coding
//         </p>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/auth/me", {
//         headers: {
//           Authorization: localStorage.getItem("token"),
//         },
//       })
//       .then((res) => setUser(res.data));
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* TOP BAR */}
//       <div className="bg-white shadow px-8 py-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold">CodeLearn</h1>

//         <div className="flex items-center gap-4">
//           <span className="font-medium">
//             {user?.name}
//           </span>
//           <button
//             onClick={logout}
//             className="text-red-600 font-medium hover:underline"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="p-10">
//         <h2 className="text-2xl font-bold mb-6">
//           Welcome, {user?.name} 👋
//         </h2>

//         {/* COURSE CARD */}
//         <div
//           onClick={() => navigate("/course/python")}
//           className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer w-96"
//         >
//           <h3 className="text-xl font-semibold mb-2">
//             Python Programming
//           </h3>
//           <p className="text-gray-600">
//             Learn Python step-by-step with live coding.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const [user, setUser] = useState({ name: "" });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return;

//         const res = await axios.get(
//           "http://localhost:5000/api/auth/me",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         setUser(res.data);
//       } catch (err) {
//         console.error("User fetch failed", err);
//       }
//     };

//     fetchUser();
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-[#0b0f19] text-white">
//       {/* NAVBAR */}
//       <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-[#0b0f19] sticky top-0 z-50">
        
//         {/* LEFT SIDE — ALWAYS VISIBLE */}
//         <div>
//           <p className="text-sm text-gray-400">Welcome</p>
//           <h1 className="text-xl font-semibold">
//             {user.name || "Student"}
//           </h1>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-4">
//           <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
//             {user.name ? user.name.charAt(0).toUpperCase() : "U"}
//           </div>

//           <button
//             onClick={logout}
//             className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-sm"
//           >
//             Logout
//           </button>
//         </div>
//       </nav>

//       {/* MAIN CONTENT */}
//       <main className="px-8 py-10">
//         <h2 className="text-xl font-semibold mb-6">
//           Your Courses
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* PYTHON COURSE CARD */}
//           <div
//             onClick={() => navigate("/course/python")}
//             className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 cursor-pointer
//                        hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition"
//           >
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold">
//                 Python Programming
//               </h3>
//               <span className="text-xs bg-blue-600 px-2 py-1 rounded">
//                 Beginner
//               </span>
//             </div>

//             <p className="text-gray-400 text-sm mb-6">
//               Learn Python interactively with real-time execution.
//             </p>

//             <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded">
//               Continue →
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState({ name: "" });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/"); // no token, redirect to login
          return;
        }

        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(res.data);
      } catch (err) {
        console.error("User fetch failed:", err);
        localStorage.removeItem("token"); // invalid/expired token
        navigate("/"); // redirect to login
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0b0f19]">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-[#0b0f19] sticky top-0 z-50">
        <div>
          <p className="text-sm text-gray-400">Welcome</p>
          <h1 className="text-xl font-semibold">{user.name || "Student"}</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-sm"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="px-8 py-10">
        <h2 className="text-xl font-semibold mb-6">Your Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* PYTHON COURSE CARD */}
          <div
            onClick={() => navigate("/course/python")}
            className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 cursor-pointer
                       hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Python Programming</h3>
              <span className="text-xs bg-blue-600 px-2 py-1 rounded">Beginner</span>
            </div>

            <p className="text-gray-400 text-sm mb-6">
              Learn Python interactively with real-time execution.
            </p>

            <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded">
              Continue →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Navbar({ user }) {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <nav className="flex justify-between items-center px-6 py-4 bg-[#0b0f19] border-b border-gray-800">
//       {/* LEFT */}
//       <div>
//         <p className="text-sm text-gray-400">Welcome</p>
//         <h1 className="text-xl font-semibold">
//           {user?.name || "Student"}
//         </h1>
//       </div>

//       {/* RIGHT */}
//       <div className="relative">
//         <div
//           onClick={() => setOpen(!open)}
//           className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer font-semibold"
//         >
//           {(user?.name?.[0] || "U").toUpperCase()}
//         </div>

//         {open && (
//           <div className="absolute right-0 mt-2 w-40 bg-[#111827] border border-gray-700 rounded">
//             <button
//               className="block w-full px-4 py-2 hover:bg-gray-800 text-left"
//               onClick={() => navigate("/dashboard")}
//             >
//               Dashboard
//             </button>
//             <button
//               className="block w-full px-4 py-2 text-red-400 hover:bg-gray-800 text-left"
//               onClick={logout}
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }


import { useState } from "react";

export default function Navbar({ user, onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-blue-900/40 bg-[#050a18] sticky top-0 z-50">
      <div>
        <p className="text-gray-400 text-sm">Welcome</p>
        <h1 className="text-xl font-semibold">
          {user?.name || "Student"}
        </h1>
      </div>

      {/* PROFILE */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold"
        >
          {(user?.name || "S")[0]}
        </button>

        {open && (
          <div className="absolute right-0 mt-3 w-40 bg-[#0b1228] border border-blue-900/40 rounded-lg shadow-lg">
            <button
              onClick={onLogout}
              className="w-full px-4 py-2 text-left text-red-400 hover:bg-red-600 hover:text-white rounded-lg"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

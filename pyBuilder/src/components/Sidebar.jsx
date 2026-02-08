// import { NavLink } from "react-router-dom";
// import { useSidebar } from "../context/SidebarContext";

// export default function Sidebar() {
//   const { collapsed, setCollapsed } = useSidebar();

//   return (
//     <aside
//       className={`fixed left-0 top-0 h-screen bg-[#050a18] border-r border-gray-800
//       transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}
//     >
//       <div className="flex items-center justify-between px-4 py-5 border-b border-gray-800">
//         {!collapsed && (
//           <span className="text-xl font-bold text-blue-500">
//             PyCourse
//           </span>
//         )}
//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="text-gray-400 hover:text-white"
//         >
//           ☰
//         </button>
//       </div>

//       <nav className="mt-4 flex flex-col gap-1 px-3 text-sm">
//         <NavLink
//           to="/dashboard"
//           className={({ isActive }) =>
//             `px-3 py-2 rounded ${
//               isActive
//                 ? "bg-blue-600 text-white"
//                 : "text-gray-400 hover:bg-[#111827]"
//             }`
//           }
//         >
//           📊 {!collapsed && "Dashboard"}
//         </NavLink>

//         <NavLink
//           to="/course/datatypes"
//           className={({ isActive }) =>
//             `px-3 py-2 rounded ${
//               isActive
//                 ? "bg-blue-600 text-white"
//                 : "text-gray-400 hover:bg-[#111827]"
//             }`
//           }
//         >
//           🐍 {!collapsed && "Python Course"}
//         </NavLink>
//       </nav>
//     </aside>
//   );
// // }
// import { NavLink } from "react-router-dom";
// import { useSidebar } from "../context/SidebarContext";

// export default function Sidebar() {
//   const { collapsed, setCollapsed } = useSidebar();

//   const completedLessons =
//     JSON.parse(localStorage.getItem("completed-lessons")) || [];

//   const currentLesson =
//     localStorage.getItem("python-current-lesson") || "datatypes";

//   const lessons = ["datatypes", "conditionals", "loops"];

//   const canAccess = (lesson) =>
//     completedLessons.includes(lesson) || lesson === currentLesson;

//   return (
//     <aside
//       className={`fixed left-0 top-0 h-screen bg-[#050a18] border-r border-gray-800
//       transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}
//     >
//       {/* HEADER */}
//       <div className="flex items-center justify-between px-4 py-5 border-b border-gray-800">
//         {!collapsed && (
//           <span className="text-xl font-bold text-blue-500">
//             PyCourse
//           </span>
//         )}
//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="text-gray-400 hover:text-white"
//         >
//           ☰
//         </button>
//       </div>

//       {/* LINKS */}
//       <nav className="mt-4 flex flex-col gap-1 px-3 text-sm">
//         {lessons.map((lesson) => {
//           const locked = !canAccess(lesson);

//           return (
//             <NavLink
//               key={lesson}
//               to={locked ? "#" : `/course/${lesson}`}
//               onClick={(e) => locked && e.preventDefault()}
//               className={`px-3 py-2 rounded transition
//                 ${
//                   locked
//                     ? "text-gray-600 cursor-not-allowed"
//                     : "text-gray-400 hover:bg-[#111827]"
//                 }`}
//             >
//               📘 {!collapsed && lesson}
//             </NavLink>
//           );
//         })}
//       </nav>
//     </aside>
//   );
// }


import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { useState } from "react";

export default function Sidebar() {
  const { collapsed, setCollapsed } = useSidebar();

  const completedLessons =
    JSON.parse(localStorage.getItem("completed-lessons")) || [];
  const currentLesson =
    localStorage.getItem("python-current-lesson") || "datatypes";

  const lessons = ["datatypes", "conditionals", "loops"];
  const canAccess = (lesson) =>
    completedLessons.includes(lesson) || lesson === currentLesson;

  const [pythonOpen, setPythonOpen] = useState(true); // toggle sub-menu

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-[#050a18] border-r border-gray-800
      transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-800">
        {!collapsed && (
          <span className="text-xl font-bold text-blue-500">PyCourse</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white"
        >
          ☰
        </button>
      </div>

      {/* LINKS */}
      <nav className="mt-4 flex flex-col gap-1 px-3 text-sm">
        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-[#111827]"
            }`
          }
        >
          📊 {!collapsed && "Dashboard"}
        </NavLink>

        {/* Python Course Main */}
        <div>
          <button
            onClick={() => setPythonOpen(!pythonOpen)}
            className="flex items-center justify-between w-full px-3 py-2 rounded text-gray-400 hover:bg-[#111827]"
          >
            <span>🐍 {!collapsed && "Python Course"}</span>
            {!collapsed && <span>{pythonOpen ? "▼" : "▶"}</span>}
          </button>

          {/* Sub-menu for lessons */}
          {pythonOpen && (
            <div className="ml-4 mt-1 flex flex-col gap-1">
              {lessons.map((lesson) => {
                const locked = !canAccess(lesson);

                return (
                  <NavLink
                    key={lesson}
                    to={locked ? "#" : `/course/${lesson}`}
                    onClick={(e) => locked && e.preventDefault()}
                    className={`px-3 py-2 rounded text-sm transition
                      ${
                        locked
                          ? "text-gray-600 cursor-not-allowed"
                          : "text-gray-400 hover:bg-[#111827]"
                      }`}
                  >
                    📘 {!collapsed && lesson}
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}

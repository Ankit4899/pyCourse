import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

export default function Sidebar() {
  const { collapsed, setCollapsed } = useSidebar();

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-[#050a18] border-r border-gray-800
      transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}
    >
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-800">
        {!collapsed && (
          <span className="text-xl font-bold text-blue-500">
            PyCourse
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white"
        >
          ☰
        </button>
      </div>

      <nav className="mt-4 flex flex-col gap-1 px-3 text-sm">
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

        <NavLink
          to="/course/datatypes"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-[#111827]"
            }`
          }
        >
          🐍 {!collapsed && "Python Course"}
        </NavLink>
      </nav>
    </aside>
  );
}

// import Sidebar from "../components/Sidebar";

// export default function AppLayout({ children }) {
//   return (
//     <div className="flex bg-[#0b0f19] min-h-screen text-white">
//       <Sidebar />

//       {/* MAIN CONTENT AREA */}
//       <div className="ml-64 w-full">
//         {children}
//       </div>
//     </div>
//   );
// }


import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";

export default function AppLayout({ children }) {
  const { collapsed } = useSidebar();

  return (
    <div className="bg-[#0b0f19] min-h-screen text-white">
      <Sidebar />

      <main
        className={`transition-all duration-300
        ${collapsed ? "ml-20" : "ml-64"}`}
      >
        {children}
      </main>
    </div>
  );
}

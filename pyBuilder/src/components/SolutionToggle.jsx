// src/components/SolutionToggle.jsx

import { useState } from "react";

export default function SolutionToggle({ solution }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-blue-400 hover:underline"
      >
        {open ? "Hide Solution ▲" : "Show Solution ▼"}
      </button>

      {open && (
        <pre className="mt-2 bg-slate-950 text-green-400 p-3 rounded text-sm">
          {solution}
        </pre>
      )}
    </div>
  );
}

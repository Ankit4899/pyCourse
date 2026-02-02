// import { useEffect, useState } from "react";
// import CodeEditor from "./CodeEditor";
// import OutputBox from "./OutputBox";
// import { getPyodide } from "../utils/pyodide";

// export default function LessonStep({ step, onCorrect }) {
//   const [code, setCode] = useState(step.starterCode);
//   const [output, setOutput] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function init() {
//       await getPyodide();
//       setLoading(false);
//     }
//     init();
//   }, []);

//   const runCode = async () => {
//     try {
//       setError("");
//       setOutput("");

//       const pyodide = await getPyodide();

//       pyodide.runPython(`
// import sys
// from io import StringIO
// sys.stdout = StringIO()
//       `);

//       pyodide.runPython(code);
//       const result = pyodide.runPython("sys.stdout.getvalue()");
//       setOutput(result);

//       if (result.trim() === step.expectedOutput.trim()) {
//         setTimeout(onCorrect, 800);
//       }
//     } catch (err) {
//       setError(err.toString());
//     }
//   };

//   if (loading) {
//     return (
//       <div className="text-slate-400 text-center mt-20">
//         Loading Python runtime…
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      
//       {/* LEFT — Explanation */}
//       <div>
//         <h1 className="text-4xl font-bold mb-6">
//           {step.title}
//         </h1>

//         <p className="text-slate-300 text-lg leading-relaxed mb-6">
//           {step.explanation}
//         </p>

//         {error && (
//           <div className="bg-red-900/40 border border-red-700 text-red-300 p-4 rounded-lg text-sm">
//             {error}
//           </div>
//         )}

//         {output.trim() === step.expectedOutput.trim() && (
//           <div className="mt-4 text-green-400 font-medium">
//             ✓ Correct! Moving to next step…
//           </div>
//         )}
//       </div>

//       {/* RIGHT — Editor */}
//       <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-lg p-4">
//         <CodeEditor code={code} setCode={setCode} />

//         <button
//           onClick={runCode}
//           className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition font-medium"
//         >
//           Run
//         </button>

//         <OutputBox output={output} />
//       </div>
//     </div>
//   );
// }

// -------------
// import { useState } from "react";
// import CodeEditor from "./CodeEditor";
// import OutputBox from "./OutputBox";
// import SolutionToggle from "./SolutionToggle";
// import { getPyodide } from "../utils/pyodide";

// export default function LessonStep({ step }) {
//   const [code, setCode] = useState(step.problems[0].starterCode);
//   const [output, setOutput] = useState("");

//   const runCode = async () => {
//     const pyodide = await getPyodide();

//     pyodide.runPython(`
// import sys
// from io import StringIO
// sys.stdout = StringIO()
//     `);

//     pyodide.runPython(code);
//     setOutput(pyodide.runPython("sys.stdout.getvalue()"));
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

//       {/* LEFT — CONTENT */}
//       <div className="space-y-10">
//         <h1 className="text-4xl font-bold">{step.title}</h1>

//         <p className="text-slate-300 text-lg">
//           {step.explanation}
//         </p>

//         {/* THEORY */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-3">📌 Key Points</h2>
//           <ul className="list-disc list-inside text-slate-300 space-y-1">
//             {step.theory.map((t, i) => (
//               <li key={i}>{t}</li>
//             ))}
//           </ul>
//         </section>

//         {/* EXAMPLES */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-3">💡 Examples</h2>
//           {step.examples.map((ex, i) => (
//             <pre
//               key={i}
//               className="bg-black text-slate-100 p-4 rounded-lg mb-3"
//             >
//               {ex.code}
//             </pre>
//           ))}
//         </section>

//         {/* PRACTICE */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-3">🧪 Practice Problems</h2>

//           {step.problems.map((p, i) => (
//             <div
//               key={i}
//               className="bg-slate-900 border border-slate-800 rounded-lg p-4 mb-4"
//             >
//               <p className="mb-2 text-slate-200">{p.question}</p>
//               <SolutionToggle solution={p.solution} />
//             </div>
//           ))}
//         </section>
//       </div>

//       {/* RIGHT — EDITOR (STICKY) */}
//       <div className="lg:sticky lg:top-6 h-fit">
//         <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-lg">
//           <CodeEditor code={code} setCode={setCode} />

//           <button
//             onClick={runCode}
//             className="mt-4 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md font-medium"
//           >
//             Run
//           </button>

//           <OutputBox output={output} />
//         </div>
//       </div>
//     </div>
//   );
// }



// src/components/LessonStep.jsx

import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import OutputBox from "./OutputBox";
import SolutionToggle from "./SolutionToggle";
import { getPyodide } from "../utils/pyodide";

export default function LessonStep({ lesson }) {
  const [activeProblem, setActiveProblem] = useState(lesson.problems[0]);
  const [code, setCode] = useState(lesson.problems[0].starterCode);
  const [output, setOutput] = useState("");

  // Restore saved progress
  useEffect(() => {
    const saved = localStorage.getItem("datatypes-progress");
    if (saved) {
      const found = lesson.problems.find(
        (p) => p.id === Number(saved)
      );
      if (found) {
        setActiveProblem(found);
        setCode(found.starterCode);
      }
    }
  }, []);

  const isSolved = (id) =>
    localStorage.getItem("solved-" + id) === "true";

  const selectProblem = (problem) => {
    setActiveProblem(problem);
    setCode(problem.starterCode);
    setOutput("");
  };

  const resetCode = () => {
    setCode(activeProblem.starterCode);
    setOutput("");
  };

  const runCode = async () => {
    try {
      const pyodide = await getPyodide();

      pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `);

      pyodide.runPython(code);
      const result = pyodide.runPython("sys.stdout.getvalue()");
      setOutput(result);

      if (result === activeProblem.expectedOutput) {
        localStorage.setItem("solved-" + activeProblem.id, "true");
        localStorage.setItem("datatypes-progress", activeProblem.id);
      }
    } catch (err) {
      setOutput(err.toString());
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* LEFT SIDE */}
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">{lesson.title}</h1>
        <p className="text-slate-300">{lesson.explanation}</p>

        <ul className="list-disc list-inside text-slate-300">
          {lesson.theory.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold">
          🧪 Practice Problems
        </h2>

        {lesson.problems.map((p, index) => {
          const locked =
            index !== 0 &&
            !isSolved(lesson.problems[index - 1].id);

          return (
            <div
              key={p.id}
              onClick={() => !locked && selectProblem(p)}
              className={`p-4 rounded-lg mb-3 border
                ${
                  locked
                    ? "bg-slate-800 opacity-50 cursor-not-allowed"
                    : activeProblem.id === p.id
                    ? "bg-blue-900 border-blue-500"
                    : "bg-slate-900 border-slate-800 hover:border-slate-600"
                }`}
            >
              <p>{p.question}</p>

              {!locked && (
                <SolutionToggle solution={p.solution} />
              )}

              {locked && (
                <p className="text-xs text-red-400 mt-2">
                  🔒 Solve previous problem first
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:sticky lg:top-6 h-fit">
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <CodeEditor code={code} setCode={setCode} />

          <div className="flex gap-3 mt-4">
            <button
              onClick={runCode}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md"
            >
              Run
            </button>

            <button
              onClick={resetCode}
              className="bg-slate-700 hover:bg-slate-600 px-5 py-2 rounded-md"
            >
              Reset
            </button>
          </div>

          <OutputBox output={output} />
        </div>
      </div>
    </div>
  );
}

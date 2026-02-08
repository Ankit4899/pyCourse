// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CodeEditor from "./CodeEditor";
// import OutputBox from "./OutputBox";
// import SolutionToggle from "./SolutionToggle";
// import { getPyodide } from "../utils/pyodide";

// export default function LessonStep({ lesson }) {
//   const navigate = useNavigate();

//   const [activeProblem, setActiveProblem] = useState(
//     lesson.problems[0]
//   );
//   const [code, setCode] = useState(
//     lesson.problems[0].starterCode
//   );
//   const [output, setOutput] = useState("");

//   const progressKey = `lesson-progress-${lesson.key}`;

//   // Restore progress
//   useEffect(() => {
//     const saved = localStorage.getItem(progressKey);
//     if (saved) {
//       const found = lesson.problems.find(
//         (p) => p.id === Number(saved)
//       );
//       if (found) {
//         setActiveProblem(found);
//         setCode(found.starterCode);
//       }
//     }
//   }, [lesson, progressKey]);

//   const isSolved = (id) =>
//     localStorage.getItem(`solved-${lesson.key}-${id}`) === "true";

//   const selectProblem = (problem) => {
//     setActiveProblem(problem);
//     setCode(problem.starterCode);
//     setOutput("");
//   };

//   const resetCode = () => {
//     setCode(activeProblem.starterCode);
//     setOutput("");
//   };

//   const runCode = async () => {
//     try {
//       const pyodide = await getPyodide();

//       pyodide.runPython(`
// import sys
// from io import StringIO
// sys.stdout = StringIO()
//       `);

//       pyodide.runPython(code);
//       const result = pyodide.runPython("sys.stdout.getvalue()");
//       setOutput(result);

//       // ✅ Correct solution
//       if (result === activeProblem.expectedOutput) {
//         localStorage.setItem(
//           `solved-${lesson.key}-${activeProblem.id}`,
//           "true"
//         );

//         localStorage.setItem(progressKey, activeProblem.id);

//         const isLastProblem =
//           activeProblem.id ===
//           lesson.problems[lesson.problems.length - 1].id;

//         // ✅ MOVE TO NEXT LESSON
//         if (isLastProblem && lesson.nextLesson) {
//           localStorage.setItem(
//             "python-current-lesson",
//             lesson.nextLesson
//           );

//           setTimeout(() => {
//             navigate(`/course/${lesson.nextLesson}`);
//           }, 800);
//         }
//       }
//     } catch (err) {
//       setOutput(err.toString());
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
//       {/* LEFT */}
//       <div className="space-y-8">
//         <h1 className="text-4xl font-bold">{lesson.title}</h1>
//         <p className="text-slate-300">{lesson.explanation}</p>

//         <ul className="list-disc list-inside text-slate-300">
//           {lesson.theory.map((t, i) => (
//             <li key={i}>{t}</li>
//           ))}
//         </ul>

//         <h2 className="text-2xl font-semibold">
//           🧪 Practice Problems
//         </h2>

//         {lesson.problems.map((p, index) => {
//           const locked =
//             index !== 0 &&
//             !isSolved(lesson.problems[index - 1].id);

//           return (
//             <div
//               key={p.id}
//               onClick={() => !locked && selectProblem(p)}
//               className={`p-4 rounded-lg mb-3 border
//                 ${
//                   locked
//                     ? "bg-slate-800 opacity-50 cursor-not-allowed"
//                     : activeProblem.id === p.id
//                     ? "bg-blue-900 border-blue-500"
//                     : "bg-slate-900 border-slate-800 hover:border-slate-600"
//                 }`}
//             >
//               <p>{p.question}</p>

//               {!locked && (
//                 <SolutionToggle solution={p.solution} />
//               )}

//               {locked && (
//                 <p className="text-xs text-red-400 mt-2">
//                   🔒 Solve previous problem first
//                 </p>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* RIGHT */}
//       <div className="lg:sticky lg:top-6 h-fit">
//         <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
//           <CodeEditor code={code} setCode={setCode} />

//           <div className="flex gap-3 mt-4">
//             <button
//               onClick={runCode}
//               className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md"
//             >
//               Run
//             </button>

//             <button
//               onClick={resetCode}
//               className="bg-slate-700 hover:bg-slate-600 px-5 py-2 rounded-md"
//             >
//               Reset
//             </button>
//           </div>

//           <OutputBox output={output} />
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CodeEditor from "./CodeEditor";
import OutputBox from "./OutputBox";
import SolutionToggle from "./SolutionToggle";
import { getPyodide } from "../utils/pyodide";

export default function LessonStep({ lesson }) {
  const navigate = useNavigate();

  const [activeProblem, setActiveProblem] = useState(lesson.problems[0]);
  const [code, setCode] = useState(lesson.problems[0].starterCode);
  const [output, setOutput] = useState("");

  const progressKey = `lesson-progress-${lesson.key}`;

  useEffect(() => {
    const saved = localStorage.getItem(progressKey);
    if (saved) {
      const found = lesson.problems.find(
        (p) => p.id === Number(saved)
      );
      if (found) {
        setActiveProblem(found);
        setCode(found.starterCode);
      }
    }
  }, [lesson, progressKey]);

  const isSolved = (id) =>
    localStorage.getItem(`solved-${lesson.key}-${id}`) === "true";

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
        // ✅ mark problem solved
        localStorage.setItem(
          `solved-${lesson.key}-${activeProblem.id}`,
          "true"
        );
        localStorage.setItem(progressKey, activeProblem.id);

        const isLastProblem =
          activeProblem.id ===
          lesson.problems[lesson.problems.length - 1].id;

        // ✅ mark lesson completed
        if (isLastProblem) {
          const completed =
            JSON.parse(localStorage.getItem("completed-lessons")) || [];

          if (!completed.includes(lesson.key)) {
            completed.push(lesson.key);
            localStorage.setItem(
              "completed-lessons",
              JSON.stringify(completed)
            );
          }

          // ✅ move to next lesson
          if (lesson.nextLesson) {
            localStorage.setItem(
              "python-current-lesson",
              lesson.nextLesson
            );

            setTimeout(() => {
              navigate(`/course/${lesson.nextLesson}`);
            }, 800);
          }
        }
      }
    } catch (err) {
      setOutput(err.toString());
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* LEFT */}
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">{lesson.title}</h1>
        <p className="text-slate-300">{lesson.explanation}</p>

        <ul className="list-disc list-inside text-slate-300">
          {lesson.theory.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold">🧪 Practice Problems</h2>

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

      {/* RIGHT */}
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

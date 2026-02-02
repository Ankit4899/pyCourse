export default function CodeEditor({ code, setCode }) {
    return (
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        className="
          w-full
          h-48
          bg-black
          text-slate-100
          font-mono
          text-sm
          p-4
          rounded-lg
          outline-none
          resize-none
          border
          border-slate-700
          focus:border-blue-500
        "
      />
    );
  }
  
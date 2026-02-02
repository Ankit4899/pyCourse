export default function OutputBox({ output }) {
    if (!output) return null;
  
    return (
      <pre className="
        mt-4
        bg-black
        text-green-400
        p-4
        rounded-lg
        text-sm
        border
        border-slate-800
        overflow-auto
      ">
        {output}
      </pre>
    );
  }
  
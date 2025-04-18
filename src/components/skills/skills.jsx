export default function Skills() {
    return (
      <section id="programming" className="py-10">
        <div className="container m-auto px-4">
          <h2 className="text-2xl font-semibold">Programming Language Proficiency</h2>
  
          <Skill label="Python, Machine‑Learning" level="Advanced" width="w-[75%]" />
          <Skill label="JavaScript, React.js"      level="Intermediate" width="w-[40%]" />
          <Skill label="HTML, TailwindCSS, CSS"    level="Intermediate" width="w-[40%]" />
        </div>
      </section>
    );
  }
  
  function Skill({ label, level, width }) {
    return (
      <div className="mt-14 first:mt-14">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{label}</h3>
          <p className="text-sm text-gray-500">{level}</p>
        </div>
        <span className={`${width} mt-2 block h-2 rounded-md bg-gradient-to-t from-blue-500 to-cyan-500`} />
      </div>
    );
  }
  
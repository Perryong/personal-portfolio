import { useEffect, useRef, useState } from "react";

export default function Timeline() {
  // ── 1. your milestones ─────────────────────────────
  const milestones = [
    { year: 2021, text: "B.Eng. Materials (NTU) → Process Engineer @ Murata" },
    { year: 2022, text: "M.Sc. AI (NTU) – part‑time" },
    { year: 2023, text: "Rotated to Rationalization / Software Engineer" },
    { year: 2024, text: "Learning full‑stack for AI deployment & UX" },
  ];

  // ── 2. scroll‑progress logic for the blue bar ──────
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 ­– 100 (%)

  useEffect(() => {
    const handler = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const max = rect.height - winH;
      const scrolled = Math.min(Math.max(winH - rect.top, 0), max);
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    handler(); // run once on mount
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // ── 3. markup ──────────────────────────────────────
  return (
    <section id="aboutme" className="container mx-auto px-4 py-10">
      <h2 className="mb-8 text-2xl font-semibold">About Me</h2>

      <div ref={trackRef} className="relative">
        {/* vertical rail */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gray-700/60">
          {/* blue scroll‑fill */}
          <div style={{ height: `${progress}%` }} className="w-full bg-blue-500" />
        </div>

        <div className="space-y-12 ml-8">
          {milestones.map(({ year, text }) => (
            <div key={year} className="flex space-x-4">
              {/* round node */}
              <div className="flex-shrink-0">
                <div className="h-4 w-4 translate-y-2 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500" />
              </div>

              {/* content */}
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold">{year}</h3>
                <p className="mt-2 text-gray-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

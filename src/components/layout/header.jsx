import { useState, useEffect } from "react";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolling(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="home"
      className={`${scrolling ? "border-b border-gray-900" : ""} fixed left-0 right-0 top-0 z-20`}
    >
      <div className="container m-auto max-w-4xl bg-black px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h1 className="text-2xl font-bold">Perry&nbsp;Portfolio</h1>

          <ul className="flex gap-4 text-sm">
            {[
              ["#projects", "Projects"],
              ["#programming", "Programming Language"],
              ["#aboutme", "About Me"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="cursor-pointer text-gray-400 hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

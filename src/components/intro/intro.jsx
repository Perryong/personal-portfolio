import background from "@/assets/background_pic.jpg";
import lk from "@/assets/linkedin.svg";
import gitsvg from "@/assets/github-mark.svg";
import resume from "@/assets/Perry_Resume.pdf";

export default function Intro() {
  return (
    <section className="container m-auto flex flex-col gap-6 px-4 pt-12 pb-12 text-center sm:flex-row sm:pt-20 sm:text-left">
      <div>
        <h2 className="text-4xl font-bold">Hello, I am Perry</h2>
        <h2 className="gradiant-text mt-1 text-4xl font-bold">Software Engineer</h2>

        <p className="mt-8 text-gray-400">
          Currently working as a Software / Rationalization Engineer at Murata
          Electronics Singapore. I’m also pursuing a part‑time M.Sc. AI at NTU.
          My journey blends academic rigour with real‑world AI applications.
        </p>

        <div className="mt-6 sm:mt-12 flex gap-4 flex-nowrap">
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            // download="Perry_Resume.pdf"
            className="flex items-center justify-center rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 px-8 py-5 hover:from-blue-700 hover:to-cyan-700"
          >
            View Resume
          </a>

          <a
            href="https://www.linkedin.com/in/wen-qing-ong/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 px-8 py-5 hover:from-blue-700 hover:to-cyan-700"
          >
            <img src={lk} className="mr-2 h-5 w-5" alt="" />
            LinkedIn
          </a>

          <a
            href="https://github.com/Perryong"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 px-8 py-5 hover:from-blue-700 hover:to-cyan-700"
          >
            <img src={gitsvg} className="mr-2 h-5 w-5" alt="" />
            GitHub
          </a>
        </div>
      </div>

      <div className="relative flex justify-center sm:block">
        <img src={background} className="z-10 w-[85%] rounded-full" alt="Perry" />
      </div>
    </section>
  );
}

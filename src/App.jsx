import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/layout/scrolltop";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/project";
import Skills from "./components/skills/skills";
import Timeline from "./components/timeline/timeline";


export default function App() {
  return (
    <div className="relative mx-auto max-w-4xl">
      <Header />
      <main className="mt-28">
        <Intro />
        <Projects />
        <Skills />
        {/* “Additional Skills” page could live here if you want a new component */}
        <Timeline />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
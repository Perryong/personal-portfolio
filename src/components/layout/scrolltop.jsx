import { useState, useEffect } from "react";
import arrowdown from "@/assets/arrow-down.svg";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggle = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  if (!show) return null;

  return (
    <button
      className="fixed right-8 bottom-0 block w-24"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <img src={arrowdown} alt="" />
    </button>
  );
}

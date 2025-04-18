import lk from "@/assets/linkedin.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container m-auto flex justify-between px-4 py-6">
        <p className="text-sm text-gray-300">Copy Right @2023</p>
        <a href="https://www.linkedin.com/in/wen-qing-ong/" target="_blank" rel="noreferrer">
          <img src={lk} className="w-5" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

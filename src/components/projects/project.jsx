import p1 from "@/assets/project1.png";
import p2 from "@/assets/project2.png";
import p3 from "@/assets/project3.png";
import p4 from "@/assets/project4.png";

const data = [
  {
    img: p1,
    title:
      "Computer Vision: Image Translation with implementation of CycleGANs",
    desc:
      "CycleGAN translating GTA‑V scenes ↔ Cityscapes dataset urban scenes.",
    link: null,
  },
  {
    img: p2,
    title:
      "Neuro‑Evolution & Fuzzy Intelligence: Time Series Stock Prediction",
    desc:
      "Hybrid DENFIS vs. LSTM/ANFIS on portfolio multiplicative returns.",
    link:
      "https://github.com/Perryongwq/Neuro-Evoluation-and-Fuzzy-Intelligence-Time-Series-Stock-Prediction",
  },
  {
    img: p3,
    title:
      "Natural Language Processing: Study on Linear Attention Mechanism",
    desc:
      "Replacing softmax with linear attention for Amazon review classification.",
    link:
      "https://github.com/Perryongwq/NLP-Study-on-Linear-Attention-Mechanism",
  },
  {
    img: p4,
    title: "Modern Image Gallery",
    desc:
      "A Vite + React image gallery with interactive layout, deployed on Vercel.",
    link: "https://image-gallery-git-main-perryongwq.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <h2 className="py-5 text-2xl font-semibold">Projects</h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {data.slice(0, 2).map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>

        <div className="grid gap-10 py-5 sm:grid-cols-2">
          {data.slice(2).map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ img, title, desc, link }) {
  return (
    <div className="flex flex-col rounded-md border border-gray-500 p-5">
      <img src={img} className="mb-4 h-auto w-full" alt={title} />

      <h3 className="mb-6 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>

      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="block rounded-full border py-3 text-center text-sm hover:border-blue-500 hover:text-blue-500 mt-5"
        >
          Checkout
        </a>
      ) : (
        <button className="mt-5 w-full rounded-full border py-3 text-sm hover:border-blue-500 hover:text-blue-500">
          Checkout GitHub
        </button>
      )}
    </div>
  );
}

import { Card, CardContent } from "@/components/ui/card";

export default function ProjectCard({ img, title, desc, link }) {
  return (
    <Card className="flex h-full flex-col">
      <CardContent className="p-5">
        <img src={img} alt={title} className="mb-4 h-auto w-full" />
        <h3 className="mb-3 text-lg font-semibold">{title}</h3>
        <p className="mb-5 text-sm text-gray-400">{desc}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="block rounded-full border py-2 text-center text-sm transition-colors hover:border-blue-500 hover:text-blue-500"
          >
            Checkout
          </a>
        )}
      </CardContent>
    </Card>
  );
}

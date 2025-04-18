import { Progress } from "@/components/ui/progress";

export default function SkillBar({ label, level, percent }) {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{label}</h3>
        <span className="text-sm text-gray-500">{level}</span>
      </div>
      <Progress value={percent} className="mt-2 h-2 bg-gray-800" />
    </div>
  );
}

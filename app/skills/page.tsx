import { Skills } from "@/components/sections/skills";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata("スキル");

export default function SkillsPage() {
  return <Skills />;
}

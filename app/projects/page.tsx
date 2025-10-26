import { Projects } from "@/components/sections/projects";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata("プロジェクト");

export default function ProjectsPage() {
  return <Projects />;
}

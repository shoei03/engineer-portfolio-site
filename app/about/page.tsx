import { About } from "@/components/sections/about";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata("自己紹介");

export default function AboutPage() {
  return <About />;
}

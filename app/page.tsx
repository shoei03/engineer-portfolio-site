import { Hero } from "@/components/sections/hero";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata();

export default function Home() {
  return <Hero />;
}

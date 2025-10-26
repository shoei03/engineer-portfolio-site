import { Contact } from "@/components/sections/contact";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata("お問い合わせ");

export default function ContactPage() {
  return <Contact />;
}

import { PROFILE, SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <Link href="/" className="text-xl font-bold text-primary">
              {PROFILE.name}
            </Link>
            <p className="text-sm text-muted-foreground text-center lg:text-left">
              {PROFILE.name}のポートフォリオサイト
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 lg:items-end">
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={item.name}
                >
                  <item.icon />
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {PROFILE.name} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

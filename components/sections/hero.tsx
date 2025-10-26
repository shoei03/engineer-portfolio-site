import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROFILE, SECTIONS, SKILLS } from "@/lib/constants";
import { Github, Linkedin, Mail } from "@deemlol/next-icons";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-background to-muted/20 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <Badge variant="outline" className="mb-4">
                {PROFILE.title}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                {PROFILE.name}
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{PROFILE.description}</p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <p className="mb-4 text-sm font-medium text-muted-foreground">
                {SECTIONS.hero.skillsLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.main.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/projects">{SECTIONS.hero.ctaPrimary}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">{SECTIONS.hero.ctaSecondary}</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/20 to-secondary/20 blur-3xl" />
              <div className="relative rounded-2xl bg-background p-8 shadow-2xl">
                <div className="aspect-square w-80 rounded-xl overflow-hidden">
                  <Image
                    src={PROFILE.image || "/dev.png"}
                    alt={`${PROFILE.name}のプロフィール画像`}
                    width={320}
                    height={320}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EDUCATION, EXPERIENCE, PROFILE, SECTIONS } from "@/lib/constants";
import { Briefcase, Calendar, Flag, MapPin } from "@deemlol/next-icons";

export function About() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {SECTIONS.about.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{SECTIONS.about.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">{SECTIONS.about.experienceTitle}</h3>
            </div>
            <div className="space-y-4">
              {EXPERIENCE.length > 0 ? (
                (
                  EXPERIENCE as Array<{
                    title: string;
                    company: string;
                    period: string;
                    description: string;
                  }>
                ).map((exp) => (
                  <Card key={exp.title}>
                    <CardHeader>
                      <CardTitle className="text-lg">{exp.title}</CardTitle>
                      <CardDescription className="font-medium">
                        {exp.company} • {exp.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground text-center">職歴はありません</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Flag className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">{SECTIONS.about.educationTitle}</h3>
            </div>
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <Card key={edu.degree}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription className="font-medium">
                      {edu.school} • {edu.year}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>{SECTIONS.about.personalInfoTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{PROFILE.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{PROFILE.age}</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{PROFILE.bio}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

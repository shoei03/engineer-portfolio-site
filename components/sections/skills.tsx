import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CERTIFICATIONS, SECTIONS, SKILLS } from "@/lib/constants";
import { Cloud, Database, GitBranch, Globe, Shield, Smartphone, Zap } from "@deemlol/next-icons";

const skillCategories = SKILLS.categories.map((category, index) => ({
  ...category,
  icon: [Globe, Database, Smartphone, Cloud, GitBranch, Shield][index],
}));

export function Skills() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {SECTIONS.skills.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{SECTIONS.skills.subtitle}</p>
        </div>

        {/* Skill Categories */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {SECTIONS.skills.certificationsTitle}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <Card key={cert.name}>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="mb-4 h-16 w-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-primary" />
                <CardTitle>{SECTIONS.skills.learningTitle}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {SKILLS.learningGoals.map((goal) => (
                  <Badge key={goal} variant="outline">
                    {goal}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {SECTIONS.skills.learningDescription}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

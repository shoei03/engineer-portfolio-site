"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PROFILE, SECTIONS, SOCIAL_LINKS } from "@/lib/constants";
import { Github, Linkedin, Mail, MapPin, Twitter } from "@deemlol/next-icons";
import { useId, useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
  {
    icon: MapPin,
    title: "所在地",
    value: PROFILE.location,
    href: "#",
  },
];

const socialLinks = SOCIAL_LINKS.map((social) => {
  const iconMap = { Github, Linkedin, Twitter };
  return {
    ...social,
    icon: iconMap[social.icon as keyof typeof iconMap],
  };
});

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // フォーム送信のロジック（実際の実装では適切なAPIエンドポイントに送信）
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    alert("お問い合わせありがとうございます。後日ご連絡いたします。");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {SECTIONS.contact.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {SECTIONS.contact.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{SECTIONS.contact.formTitle}</CardTitle>
              <CardDescription>{SECTIONS.contact.formDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor={nameId} className="block text-sm font-medium mb-2">
                      お名前 *
                    </label>
                    <input
                      type="text"
                      id={nameId}
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor={emailId} className="block text-sm font-medium mb-2">
                      メールアドレス *
                    </label>
                    <input
                      type="email"
                      id={emailId}
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={subjectId} className="block text-sm font-medium mb-2">
                    件名 *
                  </label>
                  <input
                    type="text"
                    id={subjectId}
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label htmlFor={messageId} className="block text-sm font-medium mb-2">
                    メッセージ *
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "送信中..." : "メッセージを送信"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{SECTIONS.contact.contactInfoTitle}</CardTitle>
                <CardDescription>{SECTIONS.contact.contactInfoDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-center gap-3">
                      <info.icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <a
                          href={info.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{SECTIONS.contact.socialTitle}</CardTitle>
                <CardDescription>{SECTIONS.contact.socialDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <social.icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{social.name}</p>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">{SECTIONS.contact.faqTitle}</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {SECTIONS.contact.faqs?.map((faq) => (
              <Card key={faq.question}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

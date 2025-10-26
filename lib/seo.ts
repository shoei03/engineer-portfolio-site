import { Metadata } from "next";
import { METADATA, PROFILE } from "./constants";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-portfolio.com";

export const generateMetadata = (page?: string): Metadata => {
  const title = page ? `${page} - ${METADATA.title}` : METADATA.title;
  const description = page ? `${page}ページ - ${METADATA.description}` : METADATA.description;

  return {
    title,
    description,
    keywords: METADATA.keywords,
    authors: [{ name: METADATA.author }],
    creator: PROFILE.name,
    publisher: PROFILE.name,
    openGraph: {
      title,
      description,
      url: `${baseUrl}${page ? `/${page.toLowerCase()}` : ""}`,
      siteName: METADATA.title,
      locale: "ja_JP",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    alternates: {
      canonical: `${baseUrl}${page ? `/${page.toLowerCase()}` : ""}`,
    },
  };
};

export const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: PROFILE.title,
    description: PROFILE.description,
    email: PROFILE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: PROFILE.location,
    },
    sameAs: [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
      "https://twitter.com/yourusername",
    ],
    knowsAbout: ["JavaScript", "React", "Next.js", "TypeScript", "Web Development", "Programming"],
  };
};

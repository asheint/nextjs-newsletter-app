import { Metadata } from "next";

export const socials = [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/asheint",
      handle: "asheint",
    },
    {
      id: 2,
      name: "LinkedIn",
      url: "https://linkedin.com/asheint",
      handle: "asheint",
    },
  ];
  const title = "NewsletterForm";
  const description =
    "This app is only for learning purposes";
  const image =
    "https://avatars.githubusercontent.com/u/134621843?v=4&size=64";
  
  export const metaData: Metadata = {
    title: title,
    description: description,
    openGraph: {
      title,
      description,
      url: "https://github.com/asheint",
      siteName: "GitHub",
      images: [{ url: image }],
      locale: "en-US",
      type: "website",
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
    twitter: {
      title: title,
      description: description,
      card: "summary_large_image",
      images: [image],
      creator: "@asheint",
    },
  };
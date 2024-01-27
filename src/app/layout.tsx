import type { PropsWithChildren } from "react";
import { ToasterWrapper } from "~/components/ToastProvider";
import type { Metadata } from "next";

// do not cache this layout
export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL("https://politribe.wridev.id"),
  title: {
    template: "%s | Polinema Innovation Tribe",
    default: "Polinema Innovation Tribe"
  },
  description: "Polinema Innovation Tribe adalah wadah yang memberikan kesempatan kepada mahasiswa untuk mengembangkan ide-ide kreatifnya bersama dengan tim yang terdiri dari mahasiswa-mahasiswa yang memiliki visi yang sama.",
  robots: {
    index: true,
    follow: true
  },
  keywords: ["politribe", "polinema", "innovation", "tribe", "polinema innovation tribe"],
  openGraph: {
    type: "website",
    siteName: "Polinema Innovation Tribe",
    url: "https://politribe.wridev.id",
    images: [
      {
        url: "/header.png",
        width: 1200,
        height: 630,
        alt: "Polinema Innovation Tribe",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "https://politribe.wridev.id",
    description: "Polinema Innovation Tribe adalah wadah yang memberikan kesempatan kepada mahasiswa untuk mengembangkan ide-ide kreatifnya bersama dengan tim yang terdiri dari mahasiswa-mahasiswa yang memiliki visi yang sama.",
    images: [
      {
        url: "/header.png",
        width: 1200,
        height: 630,
        alt: "Polinema Innovation Tribe",
        type: "image/png"
      }
    ]
  }
};

export default function Layout(props: PropsWithChildren<{}>) {
  return (
    <html>
    <body>
    <ToasterWrapper />
    {props.children}
    </body>
    </html>
  );
}

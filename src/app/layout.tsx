import type { Metadata, Viewport } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://abidhabib.pro";
const TITLE = "Abid Habib | Full-Stack Developer";
const DESCRIPTION =
  "Portfolio of Abid Habib, a Full-Stack Developer specializing in React.js, Node.js, MySQL, REST APIs, and Linux infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Abid Habib",
    "Full-Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "MySQL",
    "REST APIs",
    "Linux Infrastructure",
    "Islamabad",
    "Pakistan",
  ],
  authors: [{ name: "Abid Habib", url: SITE_URL }],
  creator: "Abid Habib",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Abid Habib — Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/dp.png",
        width: 698,
        height: 698,
        alt: "Abid Habib — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/dp.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f7f5",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abid Habib",
  jobTitle: "Full-Stack Developer",
  url: SITE_URL,
  image: `${SITE_URL}/dp.png`,
  email: "mailto:abid.habib@outlook.com",
  telephone: "+923444292065",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/abidhabib",
    "https://www.linkedin.com/in/abid-h-b8056a242",
    "https://wa.me/923444292065",
    "https://instagram.com/abid._.habib",
    "https://www.fiverr.com/hammad43",
  ],
  knowsAbout: [
    "React.js",
    "Node.js",
    "Express.js",
    "MySQL",
    "REST API Development",
    "Linux Administration",
    "Docker",
    "Nginx",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} ${plexMono.variable} font-body bg-bg text-ink antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

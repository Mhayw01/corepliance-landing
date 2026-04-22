import type { Metadata } from "next";
import { Inter, Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const SITE_TITLE = "Corepliance | Regulator-ready AML compliance for conveyancing lawyers";
const SITE_DESCRIPTION =
  "Regulator-ready AML compliance for conveyancing firms. Complete clear, compliant client and matter risk assessments in minutes instead of hours.";

export const metadata: Metadata = {
  metadataBase: new URL("https://corepliance.co.uk"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://corepliance.co.uk",
    siteName: "Corepliance",
    images: [
      {
        url: "/assets/meta.png",
        width: 1200,
        height: 630,
        alt: "Corepliance — Regulator-ready AML compliance for conveyancing lawyers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/assets/meta.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <link rel="canonical" href="https://corepliance.co.uk" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

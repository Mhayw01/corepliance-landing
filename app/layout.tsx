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

export const metadata: Metadata = {
  metadataBase: new URL("https://corepliance.co.uk"),
  title: "Corepliance",
  description: "The AML compliance platform for conveyancing lawyers.",
  openGraph: {
    title: "Corepliance",
    description: "The AML compliance platform for conveyancing lawyers.",
    url: "https://corepliance.co.uk",
    siteName: "Corepliance",
    images: [
      {
        url: "/assets/meta.png",
        width: 1200,
        height: 630,
        alt: "Corepliance — The AML compliance platform for conveyancing lawyers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corepliance",
    description: "The AML compliance platform for conveyancing lawyers.",
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
        <meta property="og:title" content="Corepliance" />
        <meta
          property="og:description"
          content="The AML compliance platform for conveyancing lawyers."
        />
        <meta property="og:image" content="https://corepliance.co.uk/assets/meta.png" />
        <meta property="og:url" content="https://corepliance.co.uk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Corepliance" />
        <meta
          name="twitter:description"
          content="The AML compliance platform for conveyancing lawyers."
        />
        <meta name="twitter:image" content="https://corepliance.co.uk/assets/meta.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

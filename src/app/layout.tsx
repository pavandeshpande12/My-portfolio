import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: "Pavan Deshpande | Developer",
  description:
    "Aspiring Developer passionate about Development, AI, and Product Thinking. Skilled in building efficient applications and solving complex problems.",
  keywords: [
    "Pavan Deshpande",
    "Developer",
    "Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Pavan Deshpande" }],
  openGraph: {
    title: "Pavan Deshpande | Developer",
    description:
      "Aspiring Developer passionate about Development, AI, and Product Thinking.",
    siteName: "Pavan Deshpande Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan Deshpande | Developer",
    description:
      "Aspiring Developer passionate about Development, AI, and Product Thinking.",
    creator: "@PavanD512",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <body className={`${GeistMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

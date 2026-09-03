import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://my-portfolio-pavandeshpande12.vercel.app"),
  title: "Pavan Deshpande | AI, Cloud & Cybersecurity",
  description:
    "Building secure, intelligent systems across AI, Cloud, and Cybersecurity. Focused on designing resilient architectures and solving complex problems.",
  keywords: [
    "Pavan Deshpande",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cybersecurity",
    "Secure Systems",
    "Machine Learning",
    "Cloud Security",
    "Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Pavan Deshpande" }],
  openGraph: {
    title: "Pavan Deshpande | AI, Cloud & Cybersecurity",
    description:
      "Building secure, intelligent systems across AI, Cloud, and Cybersecurity.",
    siteName: "Pavan Deshpande Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan Deshpande | AI, Cloud & Cybersecurity",
    description:
      "Building secure, intelligent systems across AI, Cloud, and Cybersecurity.",
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

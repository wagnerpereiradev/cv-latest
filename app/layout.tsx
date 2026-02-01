import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wagner Pereira | Desenvolvedor de Software · IA · Web · Produtos Digitais",
  description:
    "CV e portfólio de Wagner Pereira. Desenvolvedor de Software com foco em Inteligência Artificial aplicada, Web Services e produtos digitais. Experiência em agentes de IA, APIs, frontend e backend.",
  keywords: [
    "Wagner Pereira",
    "desenvolvedor de software",
    "inteligência artificial",
    "IA",
    "web development",
    "React",
    "Next.js",
    "OpenAI",
    "produtos digitais",
    "São Paulo",
  ],
  authors: [{ name: "Wagner Pereira", url: "https://www.linkedin.com/in/owrp/" }],
  creator: "Wagner Pereira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Wagner Pereira | Desenvolvedor de Software · IA · Web · Produtos Digitais",
    description:
      "CV e portfólio de Wagner Pereira. Desenvolvedor de Software com foco em IA aplicada, Web Services e produtos digitais.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wagner Pereira | Desenvolvedor de Software · IA · Web · Produtos Digitais",
    description: "CV e portfólio. Desenvolvedor de Software · IA · Web Services · Produtos Digitais.",
  },
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

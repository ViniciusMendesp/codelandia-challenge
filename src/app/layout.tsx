import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Codelandia Desafio",
  description: "Primeiro desafio da comunidade Codelandia",
  keywords:
    "blog, desafio, codelandia, typescript, nextjs, javascript, tailwind",
  creator: "Vinicius Mendes",
  openGraph: {
    type: "website",
    url: "https://codelandia-challenge-one.vercel.app/",
    title: "Codelandia Desafio",
    description: "Primeiro desafio da comunidade Codelandia",
    images: [
      {
        url: "/codelandia.png",
        alt: "Codelandia",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} font-SpaceGrotesk`}>{children}</body>
    </html>
  );
}

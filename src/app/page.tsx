import { Card } from "@Aplications/components/Card";
import cardData from "@Aplications/components/Card/cardData";
import { Container } from "@Aplications/components/Container";
import { Header } from "@Aplications/components/Header";
import { Metadata } from "next";

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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  bg-dark-10">
      <Header />
      <Container>
        {cardData.map((card) => (
          <Card
            key={card.id} //
            date={card.date}
            title={card.title}
            content={card.content}
          />
        ))}
      </Container>
    </main>
  );
}

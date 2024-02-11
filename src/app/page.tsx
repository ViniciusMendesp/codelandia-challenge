import { Card } from "@Aplications/components/Card";
import cardData from "@Aplications/components/Card/cardData";
import { Container } from "@Aplications/components/Container";
import { Header } from "@Aplications/components/Header";

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

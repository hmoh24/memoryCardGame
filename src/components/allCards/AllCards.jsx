import Card from "../card/card";

export default function AllCards({ children }) {
  return (
    <main>
      {children.map((cardValue) => {
        return <Card key={cardValue} value={cardValue} />;
      })}
    </main>
  );
}

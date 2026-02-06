import Card from "../card/card";
import { randomIndex, randomiseArray } from "../../util/helperFuncs";
export default function AllCards({ cardData, setCardData }) {
  function handleCardClick(e) {
    if (e.target.classList.contains("card")) {
      setCardData((prevCards) => {
        return randomiseArray(prevCards, randomIndex);
      });
    }
  }

  return (
    <main onClick={(e) => handleCardClick(e)}>
      {cardData.map((cardValue) => {
        return <Card key={cardValue} value={cardValue} />;
      })}
    </main>
  );
}

import Card from "../card/card";
import { randomIndex, randomiseArray } from "../../util/helperFuncs";
import { useState } from "react";
export default function AllCards({
  cardData,
  setCardData,
  setScore,
  setBestScore,
}) {
  const [clickedCards, setClickedCards] = useState([]);

  function handleCardClick(value) {
    if (!clickedCards.includes(value)) {
      setClickedCards((prev) => {
        let updated = [...prev, value];
        setBestScore((score) => {
          return updated.length > score ? score + 1 : score;
        });
        return updated;
      });
      setScore((prev) => prev + 1);

      setCardData((prevCards) => {
        return randomiseArray(prevCards, randomIndex);
      });
    } else {
      setScore(0);
      setClickedCards((prev) => []);
      setCardData((prevCards) => {
        return randomiseArray(prevCards, randomIndex);
      });
    }
  }

  return (
    <main>
      {cardData.map((cardValue) => {
        return (
          <Card key={cardValue} value={cardValue} onClick={handleCardClick} />
        );
      })}
    </main>
  );
}

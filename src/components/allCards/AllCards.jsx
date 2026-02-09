import Card from "../card/Card";
import { randomIndex, randomiseArray } from "../../util/helperFuncs";
import { useState } from "react";
export default function AllCards({
  cardData,
  setCardData,
  setScore,
  setBestScore,
}) {
  const [clickedCardId, setClickedCardId] = useState([]);

  function handleCardClick(value) {
    if (!clickedCardId.includes(value)) {
      setClickedCardId((prev) => {
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
      setClickedCardId((prev) => []);
      setCardData((prevCards) => {
        return randomiseArray(prevCards, randomIndex);
      });
    }
  }

  return (
    <main>
      {cardData.map((cardValue) => {
        return (
          <Card
            key={cardValue.id}
            value={cardValue}
            onClick={handleCardClick}
          />
        );
      })}
    </main>
  );
}

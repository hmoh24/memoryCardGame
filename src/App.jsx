import { useState } from "react";
import "./App.css";
import Score from "./components/score/Score";
import AllCards from "./components/allCards/AllCards";
import { randomIndex, randomiseArray } from "./util/helperFuncs";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [cardData, setCardData] = useState(
    randomiseArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], randomIndex),
  );

  return (
    <>
      <header>
        <section className="top">
          <h1>Bestiary Memory Game</h1>
          <Score score={score} />
          <Score score={bestScore} />
        </section>
        <p>
          Clicking on a unique image gets you points, clicking on an image
          you've clicked before restarts the game.
        </p>
      </header>
      <AllCards
        cardData={cardData}
        setCardData={setCardData}
        setScore={setScore}
        setBestScore={setBestScore}
      />
    </>
  );
}

export default App;

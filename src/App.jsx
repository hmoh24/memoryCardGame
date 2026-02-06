import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Score from "./components/score/Score";
import AllCards from "./components/allCards/AllCards";

function App() {
  const [count, setCount] = useState(0);
  const [cardData, setCardData] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]); //make state

  return (
    <>
      <header>
        <section className="top">
          <h1>Bestiary Memory Game</h1>
          <Score />
          <Score />
        </section>
        <p>
          Clicking on a unique image gets you points, clicking on an image
          you've clicked before restarts the game.
        </p>
      </header>
      <AllCards cardData={cardData} setCardData={setCardData} />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Score from "./components/score/Score";
import AllCards from "./components/allCards/AllCards";
import { randomIndex, randomiseArray } from "./util/helperFuncs";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [cardData, setCardData] = useState();

  const baseURL = "https://en.wikipedia.org/api/rest_v1/page/summary/";

  useEffect(() => {
    const initialCardData = [
      { id: 0, name: "Griffin", title: "", imageURL: "" },
      { id: 1, name: "Basilisk", title: "", imageURL: "" },
      { id: 2, name: "Kraken", title: "", imageURL: "" },
      { id: 3, name: "Minotaur", title: "", imageURL: "" },
      { id: 4, name: "Kitsune", title: "", imageURL: "" },
      { id: 5, name: "Golem", title: "", imageURL: "" },
      { id: 6, name: "Wendigo", title: "", imageURL: "" },
      { id: 7, name: "Djinn", title: "", imageURL: "" },
      { id: 8, name: "Leviathan", title: "", imageURL: "" },
      { id: 9, name: "Chimera", title: "", imageURL: "" },
      { id: 10, name: "Phoenix", title: "", imageURL: "" },
      { id: 11, name: "Cerberus", title: "", imageURL: "" },
    ];

    async function fetchData() {}
    //promise.all since many fetches then i want to wait for them to resolve?
  }, []);

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

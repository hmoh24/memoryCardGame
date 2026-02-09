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
      { id: 0, name: "Griffin", imageURL: "", desc: "" },
      { id: 1, name: "Basilisk", imageURL: "", desc: "" },
      { id: 2, name: "Kraken", imageURL: "", desc: "" },
      { id: 3, name: "Minotaur", imageURL: "", desc: "" },
      { id: 4, name: "Kitsune", imageURL: "", desc: "" },
      { id: 5, name: "Golem", imageURL: "", desc: "" },
      { id: 6, name: "Dragon", imageURL: "", desc: "" },
      { id: 7, name: "Jinn", imageURL: "", desc: "" },
      { id: 8, name: "Leviathan", imageURL: "", desc: "" },
      { id: 9, name: "Goblin", imageURL: "", desc: "" },
      { id: 10, name: "Mermaid", imageURL: "", desc: "" },
      { id: 11, name: "Cerberus", imageURL: "", desc: "" },
    ];

    async function fetchData(title) {
      try {
        const response = await fetch(baseURL+title)
        const result = await response.json()
        return result
      }
      catch(e){
        throw new Error(e.message)
      }
    }

    Promise.all(initialCardData.map(cardObject => {return fetchData(cardObject.name)})).then(returnArray => {
        returnArray.forEach((fetchedData, i) => {
          if (initialCardData[i].name === fetchedData.title) {
          initialCardData[i].imageURL = fetchedData.originalimage.source;
          initialCardData[i].desc = fetchedData.extract
        }
        setCardData(initialCardData)
      })}).catch(console.error)
         
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
      {
        cardData && <AllCards
        cardData={cardData}
        setCardData={setCardData}
        setScore={setScore}
        setBestScore={setBestScore}
      />
      }
      
    </>
  );
}

export default App;

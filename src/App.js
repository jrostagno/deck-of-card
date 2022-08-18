import { useEffect, useRef, useState } from "react";
import Layout from "./components/Layout/Layout";
import { drawCard, getDeck } from "./services/cards";

import ButtonPrimary from "./components/Buttons/ButtonPrimary";
import ButtonSecondary from "./components/Buttons/ButtonSecondary";
import Title from "./components/Text/Title";
import NumberText from "./components/Text/NumberText";
import CongratsText from "./components/Text/CongratsText";
import CardsDraws from "./components/Cards/CardsDraws";

import CardsSorted from "./components/Cards/CardsSorted";

const SECONDS = 1000;

function App() {
  const [deckId, setDeckId] = useState("");
  const [cards, setCards] = useState([]);
  const [finished, setFinished] = useState(false);
  const [cardSorted, setCardSorted] = useState([]);
  const [queenNumber, setQueenNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const intervalId = useRef();

  // THIS EFFECT GET THE CAD
  useEffect(() => {
    if (!deckId) {
      getDeck().then((res) => setDeckId(res.data.deck_id));
    }
  }, [deckId]);

  const handleStop = () => {
    clearInterval(intervalId.current);
  };

  // THIS EFFECT SORT THE CARDS AFTER QUEENSNUMBERS IS EQUAL TO 4
  useEffect(() => {
    if (finished) {
      const sortedCards = cards.sort((a, b) => (a.weight > b.weight ? 1 : -1));
      setCardSorted(sortedCards);
    }
  }, [finished, cards]);

  // THIS EFFECT CLEAR THE INTERVAL WHE THE QUEENSNUMBERS IS EQUAL TO 4.
  useEffect(() => {
    if (queenNumber === 4) {
      handleStop();

      setTimeout(() => {
        setFinished(true);
        setIsPlaying(false);
      }, 3000);
      setTimeout(() => {
        handleReset();
      }, 7000);
    }
  }, [queenNumber]);

  // THIS is the function that executes Setinterval
  const startDealing = () => {
    drawCard(deckId).then((res) => {
      const value = res.data.cards[0].value;
      if (value === "QUEEN") {
        setQueenNumber((oldqueen) => oldqueen + 1);
      }
      setCards((oldCard) => [
        ...oldCard,
        {
          ...res.data.cards[0],
          weight:
            value === "QUEEN"
              ? 12
              : value === "JACK"
              ? 11
              : value === "KING"
              ? 13
              : value === "ACE"
              ? 14
              : Number(value),
        },
      ]);
    });
  };

  const handleStart = () => {
    handleReset();
    setIsPlaying(true);
    intervalId.current = setInterval(startDealing, SECONDS);
  };

  const handleReset = () => {
    setCards([]);
    setFinished(false);
    setQueenNumber(0);
    setCardSorted([]);
    setDeckId("");
    getDeck().then((res) => setDeckId(res.data.deck_id));
  };

  return (
    <Layout>
      <div className="flex justify-between gap-4">
        <div>
          <Title className="mt-10">Let's Play...</Title>

          {!isPlaying ? (
            <ButtonPrimary onClick={handleStart}>Find The Queens</ButtonPrimary>
          ) : (
            <ButtonSecondary onClick={handleReset}>Reaload</ButtonSecondary>
          )}
        </div>
        {finished && <CongratsText className="mt-10">Well Done !</CongratsText>}
        {isPlaying && <NumberText className="mt-10">{queenNumber}</NumberText>}
      </div>

      {finished ? (
        <CardsSorted cardSorted={cardSorted} />
      ) : (
        <CardsDraws cards={cards} />
      )}
    </Layout>
  );
}

export default App;

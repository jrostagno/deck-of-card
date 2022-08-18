import axios from "axios";

//THIS FUNCTION GET THE DECK_ID
export const getDeck = async () => {
  try {
    const data = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

//THIS FUNCTION GET EACH CARD
export const drawCard = async (deckId) => {
  try {
    const data = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

import { GameAction } from "./gameActions";

export const gameReducer = (state, action) => {
  switch (action.type) {
    case GameAction.AddCard: {
      return {
        ...state,
        shopCards: [...state.shopCards, 1],
      };
    }
    case GameAction.SelectCardToPlay: {
      const { card } = action.payload;
      const newSelected = card === state.selectedCard ? undefined : card;
      return {
        ...state,
        selectedCard: newSelected,
      };
    }
    case GameAction.SelectPoolTile: {
      const { tile } = action.payload;
      if (!state.selectedCard) {
        alert("Choose a card to play first!");
      } else {
        state.selectedCard.addTile(tile);
      }
      return state;
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
};

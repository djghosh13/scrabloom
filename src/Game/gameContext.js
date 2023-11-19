import React, { createContext } from "react";
import { gameReducer } from "./gameReducer";
import { GameAction } from "./gameActions";
import transformations from "../Data/transformations";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

const initialState = {
  hand: {
    transformationCards: [transformations.LETTER_TO_LETTER],
    letters: ["A", "B"],
  },
  shopCards: [transformations.LETTER_TO_LETTER],
};

const GameContext = React.createContext(initialState);

export const useGameProvider = () => React.useContext(GameContext);
export const useGameReducer = () => React.useReducer(gameReducer, initialState);

export const GameStateProvider = ({ children, state, dispatch }) => {
  const addCard = () => {
    dispatch({ type: GameAction.AddCard });
  };

  const selectCardToPlay = (card) => {
    dispatch({ type: GameAction.SelectCardToPlay, payload: { card: card } });
  };

  const chooseTile = (tile) => {
    dispatch({ type: GameAction.SelectPoolTile, payload: { tile: tile } });
  };

  return (
    <GameContext.Provider
      value={{ ...state, addCard, selectCardToPlay, chooseTile }}
    >
      {children}
    </GameContext.Provider>
  );
};

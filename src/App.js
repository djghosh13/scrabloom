import "./App.css";
import colors from "./BloomDS/colors";
import Hand from "./Components/hand";
import Shop from "./Components/shop";
import { GameStateProvider, useGameReducer } from "./Game/gameContext";

function App() {
  const [gameState, gameDispatch] = useGameReducer();
  return (
    <GameStateProvider state={gameState} dispatch={gameDispatch}>
      <div
        style={{
          overflow: "hidden",
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          backgroundColor: colors.gray,
        }}
      >
        <Hand />
        <Shop />
      </div>
    </GameStateProvider>
  );
}

export default App;

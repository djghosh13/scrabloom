import "./App.css";
import Tile from "./Tile/tile";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        {["R", "A", "D"].map((letter) => (
          <Tile>{letter}</Tile>
        ))}

        <p>This is scrabloom</p>
      </div>
    </div>
  );
}

export default App;

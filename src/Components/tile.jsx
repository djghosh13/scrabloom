import colors from "../BloomDS/colors";
import { useGameProvider } from "../Game/gameContext";

const Tile = (props) => {
  const tileSize = 48;
  return (
    <div
      className="highlightable"
      style={{
        backgroundColor: colors.indigoDark,
        borderRadius: 4,
        height: tileSize,
        width: tileSize,
        textAlign: "center",
        verticalAlign: "middle",
        lineHeight: `${tileSize}px`,
        color: "black",
        display: "block",
        fontSize: "32px",
      }}
    >
      <b>{props.children}</b>
    </div>
  );
};

export default Tile;

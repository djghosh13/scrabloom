import Tile from "./tile";
import TransformationCard from "./transformationCard";
import colors from "../BloomDS/colors";
import { useGameProvider } from "../Game/gameContext";

const OwnedCards = ({ cards }) => {
  const { selectCardToPlay, selectedCard } = useGameProvider();
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        gap: 16,
      }}
    >
      {cards?.map((card, ind) => (
        <TransformationCard
          selected={card === selectedCard}
          key={ind}
          card={card}
          onClick={() => {
            selectCardToPlay(card);
          }}
        />
      ))}
    </div>
  );
};

// border-color: #9bcaeb;
// box-shadow: 0 0 16px #9bcaeb;

const Letters = ({ letters }) => {
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        gap: 16,
      }}
    >
      {letters?.map((letter, i) => (
        <Tile key={i}>{letter}</Tile>
      ))}
    </div>
  );
};

const TopBorder = () => (
  <div
    style={{
      width: "100%",
      borderTop: `2px solid ${colors.blueDark}`,
      borderBottom: `2px solid ${colors.blueDark}`,
      height: 16,
      backgroundColor: colors.white,
    }}
  />
);

const Hand = () => {
  const {
    hand: { transformationCards, letters },
    selectedCard,
  } = useGameProvider();

  return (
    <div
      style={{
        backgroundColor: "white",
        flexGrow: 1,
        height: 256,
      }}
    >
      <TopBorder />
      <div
        style={{
          display: "flex",
          padding: 16,
          justifyContent: "space-between",
        }}
      >
        <OwnedCards cards={transformationCards} />
        <div
          style={{
            boxShadow: !!selectedCard
              ? `0 0 16px ${colors.indigoLight} `
              : undefined,
            padding: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Letters letters={letters} />
          {!!selectedCard ? <div>Choose Letters</div> : null}
        </div>
      </div>
    </div>
  );
};

export default Hand;

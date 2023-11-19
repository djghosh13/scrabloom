import colors from "../BloomDS/colors";
import Spacer from "./spacer";
import TransformationCard from "./transformationCard";
import { useGameProvider } from "../Game/gameContext";
import React from "react";

const Cards = ({ cards }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
      }}
    >
      {cards.map((card, index) => (
        <React.Fragment key={index}>
          <TransformationCard card={card} />
          <Spacer height={8} />
        </React.Fragment>
      ))}
    </div>
  );
};

const Shop = () => {
  const { shopCards: cards } = useGameProvider();

  return (
    <div
      style={{
        width: 320,
        backgroundColor: "white",
        height: "100vh",
        padding: 16,
        overflow: "scroll",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        borderLeft: `2px solid ${colors.blueDarker}`,
      }}
    >
      <h1 style={{ color: colors.blueDarker }}>The Shop</h1>
      <Cards cards={cards} />
    </div>
  );
};

export default Shop;

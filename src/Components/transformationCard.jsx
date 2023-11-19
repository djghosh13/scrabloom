import colors from "../BloomDS/colors";
import Spacer from "./spacer";

const Slot = () => (
  <div
    className="highlightable"
    style={{
      backgroundColor: colors.indigoMedium,
      borderRadius: 4,
      height: 32,
      width: 32,
      marginTop: 4,
      display: "inline-block",
      boxShadow: `inset 2px 2px ${colors.indigoDarker}`,
    }}
  />
);
const CardDescription = ({ rawDescription }) => {
  if (!rawDescription) return;
  const parts = rawDescription.split(new RegExp(/([$]\d)/g));
  return (
    <div>
      {parts.map((part, i) => {
        if (part[0] === "$") {
          return <Slot key={i} />;
        } else {
          return part;
        }
      })}
    </div>
  );
};

const TransformationCard = ({ card, onClick, selected = false }) => {
  return (
    <div
      className="highlightable"
      style={{
        backgroundColor: colors.blueLight,
        color: colors.onCard,
        borderRadius: 4,
        height: 160,
        padding: 8,
        width: 128,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: selected ? `-100px 0` : undefined,
      }}
      onClick={onClick}
    >
      <div>Transformation</div>
      <Spacer height={16} />
      <CardDescription rawDescription={card?.description} />
    </div>
  );
};

export default TransformationCard;

import Card from "./Card";
import CardSkeleton from "./CardSkeleton";

const CardList = ({ skips, selectedSkip, onSkipClick, loading }) => {
  if (loading) {
    return (
      <div className="skip-container">
        {[...Array(6)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (skips.length === 0) {
    return <div className="loading">No skip sizes available...</div>;
  }

  return (
    <div className="skip-container">
      {skips.map((skip) => (
        <Card
          key={skip.id}
          skip={skip}
          isSelected={selectedSkip?.id === skip.id}
          onClick={() => onSkipClick(skip)}
        />
      ))}
    </div>
  );
};

export default CardList;

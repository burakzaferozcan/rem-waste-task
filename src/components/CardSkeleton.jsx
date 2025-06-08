const CardSkeleton = () => {
  return (
    <div className="skip-card skeleton">
      <div className="skip-size-header">
        <span className="skip-size skeleton-text"></span>
        <span className="skip-size-yards skeleton-text"></span>
      </div>
      <div className="skip-details">
        <div className="warning skeleton-text"></div>
        <div className="skip-description skeleton-text"></div>
        <div className="hire-period skeleton-text"></div>
        <div className="price skeleton-text"></div>
      </div>
      <div className="select-button skeleton-text"></div>
    </div>
  );
};

export default CardSkeleton;

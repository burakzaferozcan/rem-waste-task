const Card = ({ skip, isSelected, onClick }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price);
  };

  const calculateTotalPrice = (skip) => {
    return skip.price_before_vat + skip.price_before_vat * (skip.vat / 100);
  };

  return (
    <div
      className={`skip-card ${isSelected ? "selected" : ""} ${
        !skip.allowed_on_road ? "not-on-road" : ""
      }`}
      onClick={onClick}
    >
      <div className="skip-size-header">
        <span className="skip-size">{skip.size} Yard Skip</span>
        <span className="skip-size-yards">{skip.size} Yards</span>
      </div>
      <div className="skip-details">
        {!skip.allowed_on_road && (
          <div className="warning">Not Allowed On The Road</div>
        )}
        <div className="skip-description">{skip.size} Yard Skip</div>
        <div className="hire-period">
          {skip.hire_period_days} day hire period
        </div>
        <div className="price">{formatPrice(calculateTotalPrice(skip))}</div>
      </div>

      <div className="select-button">
        {isSelected ? "Selected" : "Select This Skip"}
      </div>
    </div>
  );
};

export default Card;

const BottomBar = ({ selectedSkip, onBack, onContinue }) => {
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
    <div className="navbar">
      <div className="disclaimer">
        Imagery and information shown throughout this website may not reflect
        the exact shape or size specification, colours may vary, options and/or
        accessories may be featured at additional cost.
      </div>
      <div className="selected-skip-info">
        {selectedSkip.size} Yard Skip
        <div className="selected-skip-price">
          {formatPrice(calculateTotalPrice(selectedSkip))}
          <span className="hire-days">
            {selectedSkip.hire_period_days} day hire
          </span>
        </div>
      </div>
      <div className="nav-buttons">
        <button className="nav-button back" onClick={onBack}>
          Back
        </button>
        <button className="nav-button continue" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default BottomBar;

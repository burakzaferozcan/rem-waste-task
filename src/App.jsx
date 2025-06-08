import React from "react";
import "./App.css";
import CardList from "./components/CardList";
import BottomBar from "./components/BottomBar";

function App() {
  const [skips, setSkips] = React.useState([]);
  const [selectedSkip, setSelectedSkip] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSkips(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSkipClick = (skip) => {
    if (selectedSkip?.id === skip.id) {
      setSelectedSkip(null);
    } else {
      setSelectedSkip(skip);
    }
  };

  const handleBack = () => {
    console.log("Back clicked");
  };

  const handleContinue = () => {
    console.log("Continue clicked");
  };

  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app">
      <header className="header">
        <h1>Choose Your Skip Size</h1>
        <p className="subtitle">
          Select the skip size that best suits your needs
        </p>
      </header>

      <CardList
        skips={skips}
        selectedSkip={selectedSkip}
        onSkipClick={handleSkipClick}
        loading={loading}
      />

      {selectedSkip && (
        <BottomBar
          selectedSkip={selectedSkip}
          onBack={handleBack}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}

export default App;

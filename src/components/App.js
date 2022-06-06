import "../styles/App.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ forecasts, location }) {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  // eslint-disable-next-line prettier/prettier
  const selectedForecast = forecasts.find((forecast) => forecast.date === selectedDate);

  // function handleForecastSelect(date) {
  //   setSelectedDate(date);
  // }
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        // eslint-disable-next-line react/jsx-no-bind
        onForecastSelect={handleForecastSelect}
      />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
}

export default App;

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details_date">{formattedDate}</div>
      <div className="forecast-details_temperature-min">
        {temperature.min}&deg;c
      </div>
      <div className="forecast-details_temperature-max">
        {temperature.max}&deg;c
      </div>
      <div className="forecast-details_humidity">{humidity}</div>
      <div className="forecast-details_wind-speed">{wind.speed}</div>
      <div className="forecast-details_wind-direction">{wind.direction}</div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    icon: PropTypes.string,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};

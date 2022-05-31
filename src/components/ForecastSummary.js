import React from "react";
import PropTypes from "prop-types";

function ForecastSummary(props) {
  const { date, description, icon, temperature } = props;

  return (
    <div className="forecast-summary">
      <div className="forecast-summary_date">{date}</div>
      <div className="forecast-summary_icon">{icon}</div>
      <div className="forecast-summary_temperature">
        {temperature.max}&deg;c
      </div>
      <div className="forecast-summary_description">{description}</div>
    </div>
  );
}

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../../components/App";
import forecast from "../../data/forecast.json";

describe("App", () => {
  it("renders App component correctly", () => {
    render(
      <App
        location={forecast.location}
        forecasts={forecast.forecasts}
        forecast={forecast.forecasts[0]}
      />
    );
    const h1Element = screen.getByText(/Limsa, Eorzea/i);

    expect(h1Element).toBeInTheDocument();
  });
});

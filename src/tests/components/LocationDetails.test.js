import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Limsa" country="Eorzea" />
    );

    expect(getByText("Limsa, Eorzea")).toBeInstanceOf(HTMLHeadingElement);
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("Searchform", () => {
  const validProps = {
    searchText: "",
    setSearchText: () => {},
    onSubmit: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the correct text on button", () => {
    render(<SearchForm />);
    const searchButton = screen.getByRole("button", { name: /search/i });

    expect(searchButton).toHaveTextContent("Search");
  });

  it("has a class", () => {
    render(<SearchForm />);
    const searchButton = screen.getByRole("button");

    expect(searchButton).toHaveClass("search_button");
  });
});

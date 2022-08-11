import React from "react";
import PropTypes from "prop-types";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <form className="search-form">
      <input
        className="input-field"
        type="text"
        placeholder="Enter city..."
        onChange={handleInputChange}
        value={searchText}
      />
      <button
        className="search-button"
        type="submit"
        data-testid="button-text"
        onClick={onSubmit}
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

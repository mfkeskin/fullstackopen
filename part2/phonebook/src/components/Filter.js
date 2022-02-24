import React from "react";

const Filter = ({ newKeyword, handleKeywordChange }) => {
  return (
    <div>
      filter shown with
      <input value={newKeyword} onChange={handleKeywordChange} />
    </div>
  );
};

export default Filter;

import React from "react";

const SearchSection = ({ allItems, filterItems }) => {
  return (
    <>
      <div className="filter">
        <input type="text" autoFocus />
      </div>
      <div className="filter-buttons">
        <p>filter by payment method</p>
        <div className="btn">
          {allItems.map((button) => {
            return (
              <button onClick={() => filterItems(button)}>{button}</button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchSection;

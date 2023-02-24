import React, { useId } from "react";

const SearchInput = ({ filters, setFilter }) => {
  const inpId = useId();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFilter(name, value);
  };

  return (
    <div className="block block_input">
      <input
        value={filters.name}
        onChange={handleChange}
        name="name"
        id={inpId}
      />
      <label htmlFor={inpId}>Search by keyword:</label>
    </div>
  );
};

export default SearchInput;

import React, { useState } from "react";
import RadioButton from "../components/RadioButton";
import useFetch from "../hooks/useFetch";

const FilterBlock = ({ field, filters, setFilter }) => {
  const { data, loading, error } = useFetch(`http://localhost:5001/${field}`);

  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    if (filters[name] === value) {
      value = null;
      console.log(3);
    }
    setFilter(name, value);
  };
  if (error) {
    return <span>error</span>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="radio_block">
      <h2>{field}</h2>
      <div className="radio_block_buttons">
        {data &&
          data.map((label, idx) => (
            <RadioButton
              onChange={handleChange}
              key={idx}
              name={field}
              label={label}
              checked={filters[field] === label}
            />
          ))}
      </div>
    </div>
  );
};

export default FilterBlock;

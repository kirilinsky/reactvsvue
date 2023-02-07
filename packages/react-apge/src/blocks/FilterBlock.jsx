import React, { useState } from "react";
import RadioButton from "../components/RadioButton";
import useFetch from "../hooks/useFetch";

const FilterBlock = ({ field, setFilter }) => {
  const { data, loading, error } = useFetch(`http://localhost:5001/${field}`);

  const onChange = (e) => { 
    let { name, value } = e.target;
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
              onChange={onChange}
              key={idx}
              name={field}
              label={label}
            />
          ))}
      </div>
    </div>
  );
};

export default FilterBlock;

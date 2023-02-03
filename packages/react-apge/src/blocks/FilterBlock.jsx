import React from "react";
import RadioButton from "../components/RadioButton";
import useFetch from "../hooks/useFetch";

const FilterBlock = ({ field }) => {
  const { data, loading, error } = useFetch(`http://localhost:5001/${field}`);

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
          data.map((label) => <RadioButton name={field} label={label} />)}
      </div>
    </div>
  );
};

export default FilterBlock;

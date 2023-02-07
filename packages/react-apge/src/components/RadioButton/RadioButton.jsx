import React, { useId } from "react";

const RadioButton = ({ onChange, name, label }) => {
  const inpId = useId();
  return (
    <div className="radio">
      <input
        onChange={onChange}
        value={label}
        name={name}
        type="radio"
        id={inpId}
      />
      <label htmlFor={inpId}>{label}
       </label>
      
    </div>
  );
};

export default RadioButton;

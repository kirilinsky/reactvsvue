import React, { useId } from "react";

const RadioButton = ({ checked, onChange, name, label }) => {
  const inpId = useId();
  
  return (
    <div className="radio">
      <input
        onClick={onChange}
        value={label}
        name={name}
        readOnly
        type="radio"
        checked={checked}
        id={inpId}
      />
      <label title={label} htmlFor={inpId}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;

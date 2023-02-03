import React, { useId } from "react";
 
 
const RadioButton = ({name,label}) => {
  const inpId = useId();
  return (
    <div className="radio">
      <input name={name} type="radio" id={inpId}/>
      <label htmlFor={inpId}>{label}</label>
    </div>
  );
};

export default RadioButton;

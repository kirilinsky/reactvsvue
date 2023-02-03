import React, { useId } from "react";
 

const SearchInput = () => {
  const inpId = useId();
  return (
    <div className="block block_input">
      
         <input id={inpId} />
      <label htmlFor={inpId}>Search by keyword:</label>
   
    </div>
  );
};

export default SearchInput;

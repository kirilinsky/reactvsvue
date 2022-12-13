import React, { useId } from "react";
import styled from "styled-components";

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchInput = () => {
  const inpId = useId();
  return (
    <InputBlock>
      <label htmlFor={inpId}>Search by keyword:</label>
      <input id={inpId} />
    </InputBlock>
  );
};

export default SearchInput;

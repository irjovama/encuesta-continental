import { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #1c1c1a;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;
`;
const Error = styled.span`
  font-size: smaller;
  color: red;
`;
const StyledSelect = styled.select`
  padding: 5px;
  border: 1px solid #7a00c6;
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */

  color: #1c1c1a;
`;

const Select = function ({ ...props }) {
  return (
    <Container>
      <Label>{props.name ? props.name : props.id}</Label>
      <StyledSelect {...props}>{props.children}</StyledSelect>
      <Error>{props.errors}</Error>
    </Container>
  );
};
export default Select;

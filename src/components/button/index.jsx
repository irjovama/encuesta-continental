import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 14px;
  background: ${(props) => (!props.disabled ? "#7A00C6" : "#402f4b")};
  border-radius: 8px;
  color: ${(props) => (!props.disabled ? "#FFFFFF" : "#9c9696")};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
`;
const Button = function ({ ...props }) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
export default Button;

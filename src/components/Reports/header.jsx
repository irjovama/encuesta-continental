import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.img`
  width: 98px;
  height: auto;
`;
const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */
  color: #7a00c6;
`;
const Header = function ({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Image src="../../../../../src/images/logo.jpg" />
    </Container>
  );
};
export default Header;

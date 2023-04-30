import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-align: center;

  color: #1c1c1a;
`;
const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #1c1c1a;
`;
const Data = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemTitle = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #7a00c6;
`;
const ItemBody = styled.div``;
const Resume = function ({ name, workers, success, qa }) {
  return (
    <Container>
      <Title>{name}</Title>
      <Data>
        <Item>
          <ItemTitle>{workers}</ItemTitle>
          <ItemBody>Personas a cargo</ItemBody>
        </Item>
        <Item>
          <ItemTitle>{success}</ItemTitle>
          <ItemBody>Respondieron la encuesta</ItemBody>
        </Item>
        <Item>
          <ItemTitle>{qa}</ItemTitle>
          <ItemBody>Puntaje general</ItemBody>
        </Item>
      </Data>
    </Container>
  );
};
export default Resume;

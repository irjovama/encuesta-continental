import styled from "styled-components";
import { Text, Unique_option } from "./questions";
import Button from "./button";
import StatusBar from "./status-bar";
const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 34px;
  width: 680px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */

  color: #1c1c1a;
`;
const Logo = styled.img`
  width: 147.87px;
  height: 48px;
  position: relative;
  left: -170px;
`;
const Test = function () {
  const body =
    "Esto esun testo de una pregunta con algo de contenido mas largo para que se pueda ver mejor los estilos";
  const min_text = "calificación mínima";
  const max_text = "calificación máxima";
  const id = 1;
  const advance = 0.1;
  const list = [
    { name: 1, value: 10 },
    { name: 2, value: 9 },
    { name: 3, value: 8 },
    { name: 4, value: 7 },
    { name: 5, value: 6 },
    { name: 6, value: 5 },
    { name: 7, value: 4 },
    { name: 8, value: 3 },
    { name: 9, value: 2 },
    { name: 10, value: 1 },
  ];

  return (
    <Container>
      <Logo src="../src/images/mini-logo.jpg" />
      <SubContainer>
        <StatusBar advance={advance} />
        <Button disabled={true}>Enviar</Button>
      </SubContainer>

      <Unique_option
        body={body}
        id={id}
        min_text={max_text}
        max_text={min_text}
        list={list}
      />
      <Text body={body} id={id} />
    </Container>
  );
};
export default Test;

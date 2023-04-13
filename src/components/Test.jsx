import styled from "styled-components";
import { Text, Unique_option } from "./questions";
import Button from "./button";
import StatusBar from "./status-bar";
import { useState } from "react";
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
const Fixed = styled.div`
  position: fixed;
  background: white;
  width: 750px;
  height: 150px;
  top: 0;
  margin: 0;
`;
const Scroll = styled.div`
  position: absolute;
  top: 150px;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 34px;
  width: 680px;
  padding-bottom: 100px;
`;
const Test = function () {
  const [advance, setAdvance] = useState(0);
  const [results, setResults] = useState([]);
  const total_questions = 4;
  const body =
    "Esto esun testo de una pregunta con algo de contenido mas largo para que se pueda ver mejor los estilos";
  const min_text = "calificación mínima";
  const max_text = "calificación máxima";
  const id = 1;
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
  const handleAdvance = function (v) {
    const newR = Object.assign(results);
    if (v.value != "") {
      if (newR.find((e) => e.name == v.name)) {
        const mapedR = newR.map((e) => (e.name == v.name ? v : e));
        setResults(mapedR);
      } else {
        newR.push(v);
        setResults(newR);
      }
    } else {
      const element = newR.find((e) => e.name == v.name);
      if (element) {
        const index = newR.indexOf(element);
        newR.splice(index, 1);
        setResults(newR);
      }
    }

    setAdvance(results.length / total_questions);
  };
  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const formValues = {};
          for (let [key, value] of formData.entries()) {
            formValues[key] = value;
          }
          console.log("Valores enviados:", formValues);
        }}
        id="myForm"
      >
        <Scroll>
          <Unique_option
            body={body}
            id={id}
            min_text={min_text}
            max_text={max_text}
            list={list}
            onSet={handleAdvance}
          />
          <Unique_option
            body={body}
            id={id + 1}
            min_text={min_text}
            max_text={max_text}
            list={list}
            onSet={handleAdvance}
          />
          <Unique_option
            body={body}
            id={id + 2}
            min_text={min_text}
            max_text={max_text}
            list={list}
            onSet={handleAdvance}
          />
          <Text body={body} id={id + 3} onSet={handleAdvance} />
        </Scroll>
        <Fixed>
          <Logo src="../src/images/mini-logo.jpg" />
          <SubContainer>
            <StatusBar advance={advance} />
            <Button disabled={advance >= 1 ? false : true}>Enviar</Button>
          </SubContainer>
        </Fixed>
      </form>
    </Container>
  );
};
export default Test;

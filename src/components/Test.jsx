import styled from "styled-components";
import { Text, Unique_option } from "./questions";
import Button from "./button";
import StatusBar from "./status-bar";
import { useState } from "react";
import { useEffect } from "react";
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
  width: 800px;

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
  const [questions, setQuestions] = useState([]);
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    const options = { method: "GET" };
    fetch(
      "http://127.0.0.1:3000/api/v1/user_tests/" + token + "/questions",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setQuestions(response);
      })
      .catch((err) => console.error(err));
  }, []);

  // const body =
  //   "Esto esun testo de una pregunta con algo de contenido mas largo para que se pueda ver mejor los estilos";
  // const min_text = "calificación mínima";
  // const max_text = "calificación máxima";
  // const id = 1;
  const list = {
    points: [
      { name: 1, value: 1 },
      { name: 2, value: 2 },
      { name: 3, value: 3 },
      { name: 4, value: 4 },
      { name: 5, value: 5 },
      { name: 6, value: 6 },
      { name: 7, value: 7 },
      { name: 8, value: 8 },
      { name: 9, value: 9 },
      { name: 10, value: 10 },
    ],
    points_reverse: [
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
    ],
  };
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

    setAdvance(results.length / questions.length);
  };
  return (
    <Container>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const formValues = {};
          const user_id = sessionStorage.getItem("user_id");
          for (let [key, value] of formData.entries()) {
            formValues[key] = value;
            const options = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body:
                '{"user_id":' +
                user_id +
                ',"question_id":' +
                key.split("_")[1] +
                ',"evaluation":"' +
                value +
                '"}',
            };
            try {
              const response = await fetch(
                "http://127.0.0.1:3000/api/v1/user_questions",
                options
              );
              const data = await response.json();
              console.log(data);
            } catch (e) {
              console.error(e);
            }
          }
          //marcar como completado en user_test
          const options = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: '{"status":1}',
          };
          const mytoken = sessionStorage.getItem("token");
          fetch("http://127.0.0.1:3000/api/v1/user_tests/" + mytoken, options)
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((err) => console.error(err));
          sessionStorage.clear();
          document.location.href = "finished";
        }}
        id="myForm"
      >
        <Scroll>
          {questions.map((q) => {
            if (q.type === "points") {
              return (
                <Unique_option
                  body={q.title}
                  key={q.id}
                  id={q.id}
                  min_text={q.options.lower}
                  max_text={q.options.upper}
                  list={list.points}
                  onSet={handleAdvance}
                />
              );
            }
            if (q.type === "points_reverse") {
              return (
                <Unique_option
                  body={q.title}
                  id={q.id}
                  key={q.id}
                  min_text={q.options.upper}
                  max_text={q.options.lower}
                  list={list.points_reverse}
                  onSet={handleAdvance}
                />
              );
            }
            if (q.type === "text_input") {
              return (
                <Text
                  body={q.title}
                  id={q.id}
                  key={q.id}
                  onSet={handleAdvance}
                />
              );
            }
          })}
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

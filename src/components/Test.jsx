import styled from "styled-components";
import { Text, Unique_option } from "./questions";
import Button from "./button";
import StatusBar from "./status-bar";
import { useState, useEffect } from "react";
import { createAnswer, getOptions, getQuestionsFromTest } from "../services/encuestaServices";

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
  const test_id = 1
  const user_id = 2
  const [advance, setAdvance] = useState(0);
  const [results, setResults] = useState([]);
  const [questions, setQuestions] = useState({question_array: null, question_total: 0});
  const [options , setOptions] = useState(null);
  useEffect(() => {
    getOptions().then((data)=> setOptions(data)).catch(console.log);
    getQuestionsFromTest(test_id).then((data)=> setQuestions({question_array: data, question_total: data.length}))
    .catch(console.log);
  }, [])

  const list = [
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

    setAdvance(results.length / questions.question_total);
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
          Object.keys(formValues).forEach(key=>{
            setTimeout(()=> {

            const body = { 
              user_id: user_id,
              question_id: Number(key.substring(2)),
              evaluation: formValues[key]
            };
            console.log(body);
            createAnswer(body).then((u)=> console.log("Succesfully created with id: "+u.id)).catch((e)=>console.log(e));
          }
        , 1800 )
        
        }
      )}}
        id="myForm"
      >
        <Scroll>
          {(questions.question_array === null) || (options === null) ? "Loading" : 
          questions.question_array.map((question)=> question.question_type === "points" ?   
          (  
          <Unique_option min_text = {options.find(option => option.id === question.option_id).lower_option}
          max_text = {options.find(option => option.id === question.option_id).upper_option}
          key={question.id} 
          id={question.id} 
          index= {question.index}
          body={question.title} 
          list={list} 
          onSet={handleAdvance}/>
          ) : 
          ( <Text key={question.id} body={question.title} id={question.id} index={question.index} onSet={handleAdvance} />)
          )
          }

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

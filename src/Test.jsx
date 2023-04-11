import styled from "styled-components";
import { useState } from "react";
import Button from "./components/button";
import Select from "./components/select";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  width: 147.87px;
  height: 48px;
  position: relative;
  left: -420px;
`;
const Paragraph = styled.p`
  width: 680px;
`;
const Test = function () {
  const [errors, setErros] = useState("Completa este campo");
  const handleClick = function (e) {
    window.location.href = "/test";
  };
  const handleInput = function (e) {
    const value = e.target.value;
    if (value === "") {
      setErros("Debes ingresar un lider");
    } else {
      setErros("");
    }
  };
  const leaders = ["Irving Jones Valdes Maciel", "Olga Lidia Calderon Rosas"];
  const text =
    "Volutpat consequat bibendum nisl dictum quisque. Vel habitant dictum nibh scelerisque leo sed in ut ac. Ultrices eu nisl volutpat feugiat amet lorem nisi duis amet. Lectus dui leo gravida risus nunc metus pellentesque quam nullam. Ultricies vitae id enim feugiat sed id. Sed aliquam magna felis eu fames justo senectus tincidunt.";
  return (
    <Container>
      <Logo src="../src/images/mini-logo.jpg" />
      <Paragraph>{text}</Paragraph>
      <Select name="Lider" id="leader" errors={errors} onChange={handleInput}>
        <option></option>
        {leaders.map((l, i) => (
          <option key={i}>{l}</option>
        ))}
      </Select>
      <Paragraph>{text}</Paragraph>
      <Paragraph>{text}</Paragraph>
      <Button disabled={errors === "" ? false : true} onClick={handleClick}>
        Comenzar
      </Button>
    </Container>
  );
};
export default Test;

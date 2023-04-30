import styled from "styled-components";
import { useState } from "react";
import Button from "./button";
import Select from "./select";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
const SelectLeader = function () {
  const [errors, setErros] = useState("Completa este campo");
  const [leaders, setLeaders] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  sessionStorage.setItem("token", query.get("token"));
  useEffect(() => {
    const options = { method: "GET" };
    fetch(
      "http://127.0.0.1:3000/api/v1/user_tests/" + query.get("token"),
      options
    )
      .then((response) => response.json())
      .then((response) => {
        sessionStorage.setItem("user_id", response[0].user_id);
        setLeaders(
          response.map((test) => {
            return (
              test.leader.name +
              " " +
              test.leader.middlename +
              " " +
              test.leader.lastname
            );
          })
        );
      })
      .catch((err) => console.error(err));
  }, []);
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
export default SelectLeader;

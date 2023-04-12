import { useState } from "react";
import styled from "styled-components";
import Field from "./field";
import Button from "./button";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins";
  padding-top: 100px;
`;
const Image = styled.img`
  width: 209px;
  height: 209px;
`;
const Title = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;
  text-align: center;
  color: #7a00c6;
  width: 500px;
  margin-bottom: 18px;
`;

const Register = function () {
  const [errors, setErrors] = useState("Please enter a Email");
  const [send, setSend] = useState(false);
  const title = "Encuesta de medicion de liderazgo";
  const handleClick = function (e) {
    setSend(true);
  };
  const handleButton = function (e) {
    const value = e.target.value;
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (value === "") {
      setErrors("Please enter a Email");
    } else if (!validEmail.test(value)) {
      setErrors("Email is invalid");
    } else {
      setErrors("");
    }
  };
  return (
    <Container>
      {send ? (
        <>
          <Title>Correo enviado</Title>
          <p>Por favor revisa tu bandeja de entrada y spam</p>
          <p>
            Un correo con un link ha sido enviado para que puedas contestar la
            encuesta
          </p>
        </>
      ) : (
        <>
          <Image src="./src/images/logo.jpg" />
          <Title>{title}</Title>
          <Field
            type="email"
            placeholder="email@domain.com"
            onInput={handleButton}
            errors={errors}
          />
          <Button disabled={errors === "" ? false : true} onClick={handleClick}>
            Registrar
          </Button>
        </>
      )}
    </Container>
  );
};
export default Register;

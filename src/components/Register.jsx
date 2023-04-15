import { useEffect, useState } from "react";
import styled from "styled-components";
import Field from "./field";
import Button from "./button";
import { useParams } from "react-router-dom";

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
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState(undefined);
  const params = useParams();
  useEffect(() => {
    try {
      const options = { method: "GET" };
      fetch("http://127.0.0.1:3000/api/v1/tests/" + params["id"], options)
        .then((response) => response.json())
        .then((response) => {
          if (response?.title) {
            setTitle(response.title);
            setLoad(true);
          } else {
            setLoad(false);
          }
        })
        .catch((err) => setLoad(false));
    } catch (error) {
      setLoad(false);
    }
  }, []);
  const handleClick = function (e) {
    e.target.style.display = "none";
    document.querySelector('[type="email"]').disabled = true;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"email":"${email}","test_id":${params["id"]}}`,
    };

    fetch("http://127.0.0.1:3000/api/v1/magic-link", options)
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          setSend(true);
        } else {
          setErrors(response.errors);
          e.target.style.display = "";
          document.querySelector('[type="email"]').disabled = false;
        }
      })
      .catch((err) => console.log("Error Irving", err));
  };
  const handleInput = function (e) {
    setEmail(e.target.value);
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (email === "") {
      setErrors("Please enter a Email");
    } else if (!validEmail.test(email)) {
      setErrors("Email is invalid");
    } else {
      setErrors("");
    }
  };
  return (
    <Container>
      {load == false ? (
        <>
          <Image src="../src/images/logo.jpg" />
          <Title>No encontrado</Title>
          <p>El link proporcionado no pertenece a ninguna encuesta en curso</p>
        </>
      ) : send ? (
        <>
          <Image src="../src/images/logo.jpg" />
          <Title>Correo enviado</Title>
          <p>Por favor revisa tu bandeja de entrada y spam</p>
          <p>
            Un correo con un link ha sido enviado para que puedas contestar la
            encuesta
          </p>
        </>
      ) : (
        <>
          <Image src="../src/images/logo.jpg" />
          <Title>{title === "" ? "..." : title}</Title>
          <Field
            type="email"
            placeholder="email@domain.com"
            value={email}
            onInput={handleInput}
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

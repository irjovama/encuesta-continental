import Graphics from "./graphics";
import Resume from "./resume";
import styled from "styled-components";
const SubTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  color: #1c1c1a;
`;
const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;
const Page1 = function () {
  return (
    <>
      <Resume name="Irving Valdes" workers={4} success={4} qa={"76%"} />
      <SubTitle>Puntaje por dimensión</SubTitle>
      <Graphics
        w={750}
        h={300}
        data={[
          {
            name: "Entrega de resultados",
            team: 90,
          },
          {
            name: "Crea vinculos genuinos",
            team: 95,
          },
          {
            name: "cuestiona y contruye el futuro",
            team: 98,
          },
        ]}
      />
      <SubTitle>Auto evaluación vs Evaluación Equipo</SubTitle>
      <Container2>
        <Graphics
          title={"titulo"}
          w={200}
          h={300}
          type={1}
          data={[
            {
              name: "",
              team: 90,
              auto: 95,
            },
          ]}
        />
        <Graphics
          title={"titulo"}
          w={200}
          h={300}
          type={1}
          data={[
            {
              name: "",
              team: 90,
              auto: 95,
            },
          ]}
        />
        <Graphics
          title={"titulo"}
          w={200}
          h={300}
          type={1}
          data={[
            {
              name: "",
              team: 90,
              auto: 95,
            },
          ]}
        />
      </Container2>
    </>
  );
};
export default Page1;

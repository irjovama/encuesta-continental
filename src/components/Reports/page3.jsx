import styled from "styled-components";
import {
  Paragraph,
  ParagraphTitle,
  Title,
  TitleText,
  TitleNumber,
} from "./components";
import Graphics from "./graphics";
const Container = styled.div``;
const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;
const Page3 = function () {
  return (
    <Container>
      <Title>
        <TitleText>Entrega de resultados</TitleText>
        <TitleNumber>90%</TitleNumber>
      </Title>
      <Paragraph>
        <ParagraphTitle>Conecta los logros con el proposito</ParagraphTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
        veniam rem officiis harum unde beatae quia error recusandae atque,
        placeat aperiam at temporibus neque asperiores velit consectetur
        eligendi. Fuga, sapiente? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consequuntur reiciendis accusamus, quidem atque
        voluptatem aut. Mollitia culpa beatae tenetur ratione officia voluptatum
        dolores id est aliquid quibusdam. Mollitia, iusto nesciunt!
        <ParagraphTitle>Ejecuta con efectividad</ParagraphTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
        veniam rem officiis harum unde beatae quia error recusandae atque,
        placeat aperiam at temporibus neque asperiores velit consectetur
        eligendi. Fuga, sapiente? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consequuntur reiciendis accusamus, quidem atque
        voluptatem aut. Mollitia culpa beatae tenetur ratione officia voluptatum
        dolores id est aliquid quibusdam. Mollitia, iusto nesciunt!
      </Paragraph>
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
      </Container2>
    </Container>
  );
};
export default Page3;

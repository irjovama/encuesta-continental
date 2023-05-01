import styled from "styled-components";
import {
  Paragraph,
  ParagraphTitle,
  Title,
  TitleText,
  TitleNumber,
} from "./components";
import Graphics from "./graphics";
import { useState } from "react";
import { useEffect } from "react";
import { getReport } from "../../utils/store";
import { useParams } from "react-router-dom";
const Container = styled.div``;
const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;
const Page3 = function ({ data }) {
  const params = useParams();
  const [data1, setData1] = useState({
    name: "",
    workers: "",
    success: "",
    general_average: "",
    averages: [],
  });
  useEffect(() => {
    getReport(params.test_id, params.leader_id, 1).then(setData1);
  }, []);
  return (
    <Container>
      <Title>
        <TitleText>{data.name}</TitleText>
        <TitleNumber>
          {data1.averages.filter((a) => a.name == data.name).map((e) => e.team)}
          %
        </TitleNumber>
      </Title>
      <Paragraph>
        <ParagraphTitle>
          ¿Qué significa haber llegado a esta nivel?
        </ParagraphTitle>
        {data.results.map((r) => {
          return `${r.data} `;
        })}
      </Paragraph>
      <Container2>
        {data.sub_categories.map((element) => {
          return (
            <Graphics
              key={element.name}
              title={element.name}
              w={300}
              h={300}
              type={1}
              data={[
                {
                  name: "",
                  team: element.average,
                  auto: element.self_average,
                },
              ]}
            />
          );
        })}
      </Container2>
      <Paragraph>
        <ParagraphTitle>Recomendaciones</ParagraphTitle>
        {data.sub_categories.map((sc) => {
          return sc.results.map((r) => {
            return `${r.data} `;
          });
        })}
      </Paragraph>
    </Container>
  );
};
export default Page3;

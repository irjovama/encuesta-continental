import styled from "styled-components";
import {
  Paragraph,
  ParagraphTitle,
  Title,
  TitleText,
  TitleNumber,
} from "./components";
import { getReport } from "../../utils/store";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Container = styled.div``;
const Page2 = function () {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    getReport(params.test_id, params.leader_id, 2).then(setData);
  }, []);
  return (
    <>
      {data?.name != "" ? (
        <>
          {data.map((item) => {
            return (
              <Container key={item.name}>
                <Title>
                  <TitleText>{item.name}</TitleText>
                  <TitleNumber>{item.team}%</TitleNumber>
                </Title>
                {item.sub_categories.map((sc) => {
                  return (
                    <Paragraph key={sc.category}>
                      <ParagraphTitle>{sc.category}</ParagraphTitle>
                      {sc.sub_categories.map((sc2) => {
                        return (
                          <>
                            <ParagraphTitle>{sc2.name}</ParagraphTitle>
                            {sc2.description}
                          </>
                        );
                      })}
                    </Paragraph>
                  );
                })}
              </Container>
            );
          })}
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
};
export default Page2;

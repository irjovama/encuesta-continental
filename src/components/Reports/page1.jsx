import { useParams } from "react-router-dom";
import { getReport } from "../../utils/store";
import Graphics from "./graphics";
import Resume from "./resume";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
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
  const params = useParams();
  const [data, setData] = useState({
    name: "",
    workers: "",
    success: "",
    general_average: "",
    averages: [],
  });
  useEffect(() => {
    getReport(params.test_id, params.leader_id, 1).then(setData);
  }, []);

  return (
    <>
      {data?.name != "" ? (
        <>
          <Resume
            name={data.name}
            workers={data.workers}
            success={data.success}
            qa={`${data.general_average}%`}
          />
          <SubTitle>Puntaje por dimensión</SubTitle>
          <Graphics
            w={750}
            h={300}
            data={data.averages.map((a) => {
              return { name: a.name, team: a.team };
            })}
          />
          <SubTitle>Auto evaluación vs Evaluación Equipo</SubTitle>
          <Container2>
            {data.averages.map((item) => {
              return (
                <Graphics
                  key={item.name}
                  title={item.name}
                  w={200}
                  h={300}
                  type={1}
                  data={[item]}
                />
              );
            })}
          </Container2>
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
};
export default Page1;

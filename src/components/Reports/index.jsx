import styled from "styled-components";

import Header from "./header";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import { useState } from "react";
import { useEffect } from "react";
import { getReport } from "../../utils/store";
import { useParams } from "react-router-dom";

const Container = styled.div`
  width: 794px;
  height: 1050px;
`;
const Reports = function () {
  const params = useParams();
  const title = "Encuesta de medicion de liderazgo";
  const [data, setData] = useState([{ results: [], sub_categories: [] }]);
  useEffect(() => {
    getReport(params.test_id, params.leader_id, 3).then(setData);
  }, []);
  return (
    <>
      {data.length > 1 ? (
        <>
          <Container>
            <Header title={title} />
            <Page1 />
          </Container>
          <Container>
            <Header title={title} />
            <Page2 />
          </Container>
          {data.map((d) => {
            return (
              <Container key={d.name}>
                <Header title={title} />
                <Page3 data={d} />
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
export default Reports;

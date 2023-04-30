import styled from "styled-components";

import Header from "./header";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

const Container = styled.div`
  width: 794px;
  height: 1050px;
`;
const Reports = function () {
  const title = "Encuesta de medicion de liderazgo";
  return (
    <>
      <Container>
        <Header title={title} />
        <Page1 />
      </Container>
      <Container>
        <Header title={title} />
        <Page2 />
      </Container>
      <Container>
        <Header title={title} />
        <Page3 />
      </Container>
    </>
  );
};
export default Reports;

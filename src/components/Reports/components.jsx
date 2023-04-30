import styled from "styled-components";

const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;
const TitleText = styled.div`
  grid-column: 1 / span 2;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  color: #1c1c1a;
`;
const TitleNumber = styled.div`
  grid-column: 2 / span 2;
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  color: #7a00c6;
`;
const Paragraph = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;

  color: #1c1c1a;
`;
const ParagraphTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  color: #1c1c1a;
`;
export { Paragraph, ParagraphTitle, Title, TitleText, TitleNumber };

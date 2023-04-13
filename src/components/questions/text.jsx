import styled from "styled-components";
import { TextArea } from "../field";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Paragraph = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #1c1c1a;
`;
const Options = styled.div`
  display: flex;
  align-items: center;
`;

const Text = function ({ id, body, onSet }) {
  const [value, setValue] = useState("");
  const Qid = "Q_" + id;

  return (
    <Container>
      <Paragraph>
        {Qid}.- {body}
      </Paragraph>
      <Options>
        <TextArea
          cols={70}
          id={Qid}
          name={Qid}
          onKeyDown={(e) => {
            setValue(e.target.value);
            onSet({ name: Qid, value: value });
          }}
        ></TextArea>
      </Options>
    </Container>
  );
};
export default Text;

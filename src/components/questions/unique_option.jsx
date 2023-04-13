import { useState } from "react";
import styled from "styled-components";

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
  justify-content: space-between;
  align-items: center;
`;
const Option = styled.button`
  background: ${(props) => (props.selected ? "#7a00c6" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#1c1c1a")};
  border: 1px solid #7a00c6;
  border-radius: 100px;
  width: 36px;
  height: 36px;
  text-align: center;
  cursor: pointer;
`;
const Unique_option = function ({ id, body, min_text, max_text, list, onSet }) {
  const [select, setSelect] = useState("");
  const Qid = "Q_" + id;
  const handleClick = function (e) {
    const newValue = e.target.dataset.value;
    const name = e.target.parentElement.parentElement.children[0].name;
    setSelect(newValue);
    onSet({ name: name, value: newValue });
  };
  return (
    <Container>
      <input type="hidden" name={Qid} id={Qid} value={select} />
      <Paragraph>
        <strong>{Qid}</strong>.- {body}
      </Paragraph>
      <Options>
        <p>{min_text}</p>
        {list.map((v) => (
          <Option
            type="button"
            key={v.name}
            data-name={v.name}
            data-value={v.value}
            onClick={handleClick}
            selected={select == v.value ? true : false}
          >
            {v.name}
          </Option>
        ))}
        <p>{max_text}</p>
      </Options>
    </Container>
  );
};
export default Unique_option;

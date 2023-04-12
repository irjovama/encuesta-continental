import styled from "styled-components";

const Container = styled.div`
  border-bottom: 8px solid rgba(122, 0, 198, 0.1);
  border-radius: 8px;
  width: 500px;
`;
const Status = styled.div`
  border-bottom: 8px solid rgba(122, 0, 198, 1);
  border-radius: 8px;
  width: ${(props) => props.length}px;
  position: absolute;
`;
const StatusBar = function ({ advance }) {
  return (
    <Container>
      <Status length={500 * advance} />
    </Container>
  );
};
export default StatusBar;

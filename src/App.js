import styled from "./styled";

const color = "#f00";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${color};
`;

const Container2 = styled(Container)`
  justify-content: center;
  color: #666;
`;

const World = styled.span`
  color: #000;
  font-weight: bold;
`;

function App() {
  return (
    <Container2>
      Hello,
      <World>World!</World>
    </Container2>
  );
}

export default App;

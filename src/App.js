import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
function App() {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: auto;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;

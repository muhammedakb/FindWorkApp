import { FC } from "react";
import { Text } from "react-native";
import Deneme from "./components/Deneme";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: "#fff";
  align-items: center;
  justify-content: center;
`;

const RotatedBox = styled.Text`
  transform: rotate(45deg);
  margin-top: 40px;
  color: #ef5251;
  /* #ECEEF0 */
`;

const App: FC = () => {
  return (
    <Container>
      <RotatedBox>Open up App.tsx to start working on your app!</RotatedBox>
      <Deneme />
    </Container>
  );
};
export default App;

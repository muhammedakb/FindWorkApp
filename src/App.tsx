import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Deneme from "./components/Deneme";

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#000" }}>
        Open up App.tsx to start working on your app!
      </Text>
      <Deneme />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

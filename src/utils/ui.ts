import { Dimensions, StatusBar } from "react-native";

const screenHeight = Dimensions.get("screen").height;
const statusBarHeight = StatusBar.currentHeight || 25;
const windowHeight = Dimensions.get("window").height;
const navigationBarHeight = screenHeight - (windowHeight + statusBarHeight);

export default {
  screenHeight,
  statusBarHeight,
  windowHeight,
  navigationBarHeight,
};

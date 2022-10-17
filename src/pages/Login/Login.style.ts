import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2.3,
    alignSelf: "center",
    marginTop: 10,
  },
  focused_img: {
    opacity: 0.3,
  },
  form: {
    alignItems: "center",
  },
  error_message: {
    color: "#f46564",
    fontSize: 13,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
});

export const focusedStyles = (keyboardHeight: number) =>
  StyleSheet.create({
    form: {
      position: "absolute",
      top: (Dimensions.get("window").height - (keyboardHeight + 255)) / 2,
      width: "100%",
    },
  });

import { Dimensions, StyleSheet } from "react-native";

const buttonStyle = StyleSheet.create({
  button: {
    width: 230,
    height: 43,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StyleSheet.create({
  button: {
    ...buttonStyle.button,
    backgroundColor: "#000",
    shadowColor: "#000",
    elevation: 5,
  },
  disabled: {
    ...buttonStyle.button,
    backgroundColor: "#ccc",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    flexDirection: "column",
  },
  left_icon: {
    paddingLeft: 5,
  },
  right_icon: {
    paddingRight: 5,
  },
});

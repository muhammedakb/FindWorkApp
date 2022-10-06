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
  focused_form: {
    position: "absolute",
    top: 0,
    width: "100%",
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

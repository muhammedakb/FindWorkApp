import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  footer_container: {
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  footer_button: {
    width: 80,
    height: 30,
  },
  //   footer_text: {
  //     fontSize: 17,
  //     color: "#40dac6",
  //     fontWeight: "bold",
  //     textDecorationLine: "underline",
  //     textDecorationStyle: "solid",
  //   },
  //   footer_text_disabled: {
  //     fontSize: 17,
  //     fontWeight: "bold",
  //     color: "#ccc",
  //   },
  footer_page_text: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    marginHorizontal: 25,
  },
});

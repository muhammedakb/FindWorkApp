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
    height: 35,
  },
  footer_picker: {
    width: 140,
    marginHorizontal: 15,
  },
  footer_page_text: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
});

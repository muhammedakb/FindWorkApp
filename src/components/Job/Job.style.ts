import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
  row_style: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default StyleSheet.create({
  container: {
    height: 110,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e2e2e2",
    borderRadius: 5,
    padding: 12,
    margin: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  header: {
    ...baseStyle.row_style,
    justifyContent: "space-between",
  },
  footer: {
    ...baseStyle.row_style,
    overflow: "hidden",
  },
  location: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: "#40dac6",
    color: "#fff",
    borderRadius: 5,
  },
  location_text: {
    color: "#fff",
  },
  level: {
    color: "#40dac6",
    fontWeight: "500",
  },
});

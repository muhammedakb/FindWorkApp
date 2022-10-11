import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header_container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  title_lg: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title_sm: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    paddingBottom: 5,
  },
  job_key: {
    fontSize: 16,
    color: "#40dac6",
  },
  footer_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  footer_buttons: {
    width: 170,
    backgroundColor: "#40dac6",
  },
  remove_button: {
    width: 200,
    backgroundColor: "#d63737",
  },
});

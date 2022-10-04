import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    width: 230,
    height: 43,
    backgroundColor: "#000",
    // marginLeft: (Dimensions.get("window").width - 230) / 2,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

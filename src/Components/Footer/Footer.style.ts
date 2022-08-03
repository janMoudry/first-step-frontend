import { StyleSheet } from "react-native";
import { Device } from "../../GlobalVars";

const defaultStyles = StyleSheet.create({
  container: {
    backgroundColor: "#453d6b",
    height: 160,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "#FFFFFF",
    marginTop: 10,
    fontFamily: "Baloo2-Bold",
  },
  description: {
    fontSize: 8,
    width: "90%",
    textAlign: "center",
    color: "#FFFFFF",
    position: "absolute",
    bottom: 2,
    fontFamily: "Baloo2-Regular",
  },
  infoButton: {
    backgroundColor: "rgb(229, 182, 230)",
    width: 150,
    marginTop: 10,
    height: 25,
    paddingHorizontal: 5,
  },
  infoButtonText: {
    fontSize: 12,
    color: "rgb(69, 61, 107)",
  },
  icon: {},
});

export default defaultStyles;

import { StyleSheet } from "react-native";
import { colors } from "../../Theme/Theme";

const defaultStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
  },
  innerContainer: {
    borderBottomWidth: 0,
    width: "33.33333%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundMain,
  },
});

export default defaultStyles;

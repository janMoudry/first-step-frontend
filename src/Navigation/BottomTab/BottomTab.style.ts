import { StyleSheet } from "react-native";
import { colors } from "../../Theme/Theme";

const defaultStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    borderTopWidth: 1,
  },
  innerContainer: {
    borderBottomWidth: 0,
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundMain,
  },
  innerContainerFocus: {
    borderBottomWidth: 0,
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default defaultStyles;

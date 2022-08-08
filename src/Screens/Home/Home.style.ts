import { StyleSheet } from "react-native";
import { colors } from "../../Theme/Theme";

const fileStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.backgroundMain,
  },
  usersContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default fileStyles;

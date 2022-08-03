import { StyleSheet } from "react-native";
import { colors, fontFamilies } from "../../Theme/Theme";

const defaultStyles = StyleSheet.create({
  container: {
    width: "80%",
    height: 50,
    backgroundColor: colors.backgroundMain,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    borderColor: "rgba(0,0,0,0.3)",
  },
  containerFocused: {
    width: "80%",
    height: 50,
    backgroundColor: colors.backgroundMain,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    borderColor: colors.textMain,
  },
  input: {
    width: "75%",
    height: 50,
    fontSize: 20,
    fontFamily: fontFamilies.MainFamily,
    color: colors.textMain,
  },
  text: {
    fontSize: 20,
    fontFamily: fontFamilies.MainFamily,
    color: colors.textMain,
    position: "absolute",
    bottom: -28,
    left: -5,
  },
  textFocused: {
    fontSize: 10,
    fontFamily: fontFamilies.MainFamily,
    color: colors.textMain,
  },
  textContainer: {
    backgroundColor: "transparent",
    top: 8,
    left: 10,
    position: "absolute",
  },
  textContainerFucused: {
    height: 20,
    backgroundColor: colors.backgroundMain,
    top: -12,
    left: 10,
    position: "absolute",
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    width: 30,
    height: 30,
    borderColor: colors.textMain,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 2,
  },
});

export default defaultStyles;

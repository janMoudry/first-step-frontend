import { StyleSheet } from "react-native";
import { colors, fontFamilies } from "../../Theme/Theme";

const defaultStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.backgroundTabs,
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontFamily: fontFamilies.MainFamilyBold,
    fontSize: 50,
    color: colors.textMain,
  },
  promoText: {
    fontFamily: fontFamilies.MainFamilyCursive,
    fontSize: 15,
    color: colors.backgroundMain,
    paddingHorizontal: 50,
  },
  promoTextTitle: {
    fontFamily: fontFamilies.MainFamilyCursive,
    paddingVertical: 10,
    fontSize: 20,
    color: "yellow",
  },
  innerContainer: {
    width: "100%",
    height: 550,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    backgroundColor: colors.backgroundMain,
    justifyContent: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  formContainer: {
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    width: "100%",
  },
  formTitle: {
    fontSize: 40,
    fontFamily: fontFamilies.MainFamilyBold,
    color: colors.textMain,
    top: -10,
  },
  buttonContainer: { justifyContent: "flex-end", alignItems: "center" },
});

export default defaultStyles;

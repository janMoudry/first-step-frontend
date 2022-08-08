import { StyleSheet } from "react-native";
import { colors, fontFamilies } from "../../../../Theme/Theme";

const fileStyles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.95,
  },
  container: {
    backgroundColor: colors.backgroundMain,
    width: "100%",
    height: "100%",
    position: "absolute",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "50%",
    marginTop: -10,
  },
  innerContainer: {
    backgroundColor: colors.backgroundMain,
    width: "100%",
    height: "100%",

    paddingVertical: 30,
    marginTop: -50,
    borderRadius: 50,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 30,
    fontFamily: fontFamilies.MainFamilyBold,
  },
  ageText: {
    fontFamily: fontFamilies.MainFamily,
    fontSize: 18,
    marginLeft: 5,
  },
  descriptionnText: {
    fontFamily: fontFamilies.MainFamily,
    textAlign: "center",
    color: colors.textMain,
    fontSize: 13,
    paddingBottom: 30,
    paddingHorizontal: 10,
  },
  hobbiesContainer: {
    flexDirection: "column",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  hobbiesTitle: { fontSize: 20, fontFamily: fontFamilies.MainFamilyBold },
  hobbiesText: { fontFamily: fontFamilies.MainFamily },
  buttonContainer: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
    position: "absolute",
    alignSelf: "center",
    bottom: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
  },
});

export default fileStyles;

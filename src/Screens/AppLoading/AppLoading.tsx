import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { colors, fontFamilies } from "../../Theme/Theme";

const AppLoading = () => (
  <View
    style={{
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text
      style={{
        fontFamily: fontFamilies.MainFamilyBold,
        fontSize: 50,
        color: colors.backgroundTabs,
      }}
    >
      First Step
    </Text>
    <Text
      style={{
        fontFamily: fontFamilies.MainFamilyCursive,
        fontSize: 15,
        color: "white",
        paddingHorizontal: 50,
      }}
    >
      {`Lets make your `}
      <Text
        style={{
          fontFamily: fontFamilies.MainFamilyCursive,
          paddingVertical: 10,
          fontSize: 20,
          color: colors.backgroundTabs,
        }}
      >
        first step
      </Text>
      {` to meet your soulsmate`}
    </Text>
    <ActivityIndicator
      size={Dimensions.get("screen").height / 3}
      color={colors.backgroundTabs}
    />
    <Text
      style={{
        fontSize: 10,
        fontFamily: fontFamilies.MainFamily,
        position: "absolute",
        bottom: 5,
        textAlign: "center",
      }}
    >
      Práva jsou vyhrazena jen mně
    </Text>
  </View>
);

export default AppLoading;

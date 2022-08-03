import { View, Text } from "react-native";
import { colors, fontFamilies } from "../../../../Theme/Theme";

const BasicInfo = ({ name, age, description }) => (
  <>
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 25,
          color: colors.textMain,
          fontFamily: fontFamilies.MainFamilyBold,
          marginRight: 5,
        }}
      >
        {name}
      </Text>
    </View>
    <Text
      style={{
        fontSize: 25,
        color: colors.textMain,
        fontFamily: fontFamilies.MainFamilyBold,
        alignSelf: "center",
      }}
    >
      ({age})
    </Text>
    <Text
      style={{
        color: colors.textMain,
        padding: 10,
        textAlign: "center",
        fontFamily: fontFamilies.MainFamilyCursive,
      }}
    >
      {description}
    </Text>
  </>
);

export default BasicInfo;

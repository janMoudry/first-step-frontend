import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { colors, fontFamilies } from "../../Theme/Theme";
import DropShadow from "react-native-drop-shadow";

interface CustomButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton = ({
  label,
  onPress,
  disabled = false,
}: CustomButtonProps): React.ReactElement => {
  return !disabled ? (
    <TouchableOpacity
      style={{
        width: 200,
        height: 50,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: colors.textMain,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: colors.textMain,
          fontFamily: fontFamilies.MainFamilyBold,
          fontSize: 20,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  ) : (
    <View
      style={{
        width: 200,
        height: 50,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: colors.textMain,
        opacity: 0.5,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: colors.textMain,
          fontFamily: fontFamilies.MainFamily,
          fontSize: 20,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default CustomButton;

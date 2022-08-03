import { View, TouchableOpacity, Text } from "react-native";
import React, { useState, useEffect } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { colors, fontFamilies } from "../../Theme/Theme";

interface CheckButtonProps {
  label: string;
  onCheck: React.Dispatch<React.SetStateAction<boolean>>;
  onTextPress?: Function;
  isCheck: boolean;
}

const CheckButton = ({
  label,
  onCheck,
  onTextPress,
  isCheck,
}: CheckButtonProps): React.ReactElement => {
  const checkIcon = <Icon name="check" size={15} color={colors.textMain} />;

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginVertical: 10,

          paddingBottom: 3,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: colors.textMain,
            fontFamily: fontFamilies.MainFamilyCursive,
            marginRight: 10,
          }}
        >
          {label}
        </Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            borderWidth: 1,
            borderColor: colors.textMain,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
          onPress={() => (!!isCheck ? onCheck(false) : onCheck(true))}
        >
          {!!isCheck && checkIcon}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CheckButton;

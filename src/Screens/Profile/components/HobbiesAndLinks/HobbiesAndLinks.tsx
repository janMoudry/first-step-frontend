import React, { useCallback } from "react";
import { Text, TouchableOpacity, View, Linking } from "react-native";
import { colors, fontFamilies } from "../../../../Theme/Theme";
import Icon from "react-native-vector-icons/Fontisto";
import { Link } from "@react-navigation/native";

const HobbiesAndLinks = ({ hobbies }) => {
  return (
    <>
      <Text
        style={{
          fontFamily: fontFamilies.MainFamily,
          fontSize: 20,
          marginLeft: 10,
          color: colors.textMain,
          marginTop: 10,
        }}
      >
        Baví mě:
      </Text>
      <View style={{ flexDirection: "row", paddingLeft: 20 }}>
        {hobbies.map((hobby, index) => (
          <Text
            style={{
              fontFamily: fontFamilies.MainFamilyCursive,
              color: colors.textMain,
            }}
            key={hobby}
          >
            {index === 0 ? `${hobby}` : `, ${hobby}`}
          </Text>
        ))}
      </View>
    </>
  );
};
export default HobbiesAndLinks;

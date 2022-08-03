import { Text, TouchableOpacity, View, Linking } from "react-native";
import { colors, fontFamilies } from "../../../../Theme/Theme";
import Icon from "react-native-vector-icons/Fontisto";
import { useCallback } from "react";
import { Link } from "@react-navigation/native";

const HobbiesAndLinks = ({ hobbies, links }) => {
  const openSocialSite = useCallback(
    async (link) => {
      await Linking.openURL(link);
    },
    [Link],
  );

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

      <View
        style={{
          flexDirection: "row",
          bottom: 5,
          position: "absolute",
          alignSelf: "center",
        }}
      >
        {links.map((link) => (
          <TouchableOpacity
            onPress={() => openSocialSite(link.url)}
            key={link.name}
          >
            <Icon
              size={40}
              name={link.name}
              color={colors.textMain}
              style={{ marginHorizontal: 20 }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};
export default HobbiesAndLinks;

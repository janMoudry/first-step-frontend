import React from "react";
import { Modal, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { getText } from "../Storage/getText";
import { logout } from "../Storage/storage";
import { colors, fontFamilies } from "../Theme/Theme";

export const MainOption = ({ navigation }) => ({
  headerTransparent: true,
  title: "",
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
      <Icon
        name="options"
        size={30}
        color={colors.textMain}
        style={{ margin: 10 }}
      />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Profile");
      }}
    >
      <Icon
        name="user"
        size={30}
        color={colors.textMain}
        style={{ margin: 10 }}
      />
    </TouchableOpacity>
  ),
});

export const SettingOption = ({ navigation }) => ({
  title: getText("SETTING").toUpperCase(),
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: colors.backgroundMain,
  },
  headerTitleStyle: {
    fontFamily: fontFamilies.MainFamilyBold,
    color: colors.textMain,
  },
  headerLeft: () => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => navigation.pop()}
    >
      <Icon name="arrow-left-circle" size={30} color={colors.textMain} />
      <Text
        style={{
          fontSize: 15,
          fontFamily: fontFamilies.MainFamily,
          marginLeft: 10,
          color: colors.textMain,
        }}
      >
        {getText("COMMON.BACK")}
      </Text>
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity onPress={async () => await logout()}>
      <Icon name="logout" size={30} color={colors.textMain} />
    </TouchableOpacity>
  ),
});

export const ProfileOption = ({ navigation }) => ({
  title: getText("PROFILE").toUpperCase(),
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: colors.backgroundMain,
  },
  headerTitleStyle: {
    fontFamily: fontFamilies.MainFamilyBold,
    color: colors.textMain,
  },
  headerLeft: () => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => navigation.pop()}
    >
      <Icon name="arrow-left-circle" size={30} color={colors.textMain} />
      <Text
        style={{
          fontSize: 15,
          fontFamily: fontFamilies.MainFamily,
          marginLeft: 10,
          color: colors.textMain,
        }}
      >
        {getText("COMMON.BACK")}
      </Text>
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity
      style={{ alignSelf: "flex-end" }}
      onPress={() => navigation.navigate("EditProfile", { isNew: false })}
    >
      <Icon name="note" size={30} color={colors.textMain} />
    </TouchableOpacity>
  ),
});

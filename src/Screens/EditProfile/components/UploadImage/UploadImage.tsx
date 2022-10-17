import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { colors } from "../../../../Theme/Theme";

const UploadImage = ({ image, showModal }) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: 20,
        overflow: "hidden",
        borderWidth: 1,
      }}
      onPress={() => showModal(true)}
    >
      {!!image && image?.uri ? (
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={{ uri: image.uri }}
        />
      ) : (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            alignSelf: "center",

            width: "100%",
            alignItems: "center",
            paddingVertical: 10,
            borderWidth: 1,
            borderRadius: 100,
            borderBottomWidth: 0,
          }}
        >
          <Text style={{ color: colors.textMain }}> Nahrát fotku </Text>
          <Icon name={"camera"} size={40} color={colors.textMain} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default UploadImage;

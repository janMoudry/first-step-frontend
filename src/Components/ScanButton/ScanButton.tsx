import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { getText } from "../../Storage/getText";
import { colors, fontFamilies } from "../../Theme/Theme";

const ScanButton = ({ scanning, doneScanning, onPress, firstScan = true }) => {
  return scanning ? (
    <>
      <View
        onPress={onPress}
        style={{
          borderWidth: 1,
          width: 100,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          borderColor: colors.textMain,
          borderRadius: 50,
        }}
      >
        <ActivityIndicator size={50} />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontFamily: fontFamilies.MainFamily,
          alignSelf: "center",
          marginTop: 10,
          color: colors.textMain,
        }}
      >
        Scanning...
      </Text>
    </>
  ) : doneScanning ? (
    <>
      <View
        onPress={onPress}
        style={{
          borderWidth: 1,
          width: 100,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          borderColor: colors.textMain,
          borderRadius: 50,
        }}
      >
        <Icon name="ios-thumbs-up-outline" size={50} color={colors.textMain} />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontFamily: fontFamilies.MainFamily,
          alignSelf: "center",
          marginTop: 10,
          color: colors.textMain,
        }}
      >
        Found devices
      </Text>
    </>
  ) : firstScan ? (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{
          borderWidth: 1,
          width: 100,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          borderColor: colors.textMain,
          borderRadius: 50,
        }}
      >
        <Icon name="ios-search" size={50} color={colors.textMain} />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          fontFamily: fontFamilies.MainFamily,
          alignSelf: "center",
          marginTop: 10,
          color: colors.textMain,
        }}
      >
        {getText("SCAN_CLASSIC")}
      </Text>
    </>
  ) : (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{
          borderWidth: 1,
          width: 100,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          borderColor: colors.textMain,
          borderRadius: 50,
        }}
      >
        <Icon name="refresh" size={50} color={colors.textMain} />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          fontFamily: fontFamilies.MainFamily,
          alignSelf: "center",
          marginTop: 10,
          color: colors.textMain,
        }}
      >
        refresh
      </Text>
    </>
  );
};

export default ScanButton;

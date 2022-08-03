import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
} from "react-native-reanimated";
import { useEffect } from "react";
import { Device } from "../../../../GlobalVars";

const HelpModal = ({ onPress, onClose, isTogged }) => {
  const crossIcon = (
    <Icon
      onPress={onClose}
      name="plus"
      size={30}
      color="black"
      style={{
        transform: [{ rotate: "45deg" }],
        left: -0.5,
        top: 0.5,
        alignSelf: "flex-end",
        margin: 2,
        marginBottom: 10,
      }}
    />
  );

  return (
    <Modal animationType="fade" visible={isTogged} transparent>
      <TouchableOpacity
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
        onPress={onClose}
      />

      <View
        style={{
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(255, 203, 176)",
            width: 300,
            borderRadius: 5,
            alignItems: "center",
            position: "absolute",
            top: 100,
          }}
        >
          {crossIcon}
          <Text
            style={{
              alignSelf: "center",
              fontFamily: "Baloo2-Regular",
              textAlign: "center",
            }}
          >
            Nejde to? Zavolej nám na bezplatnou infolinku
          </Text>
          <Text
            style={{
              fontFamily: "Baloo2-Bold",
              textDecorationLine: "underline",
            }}
          >
            800987654
          </Text>
          <Text
            style={{
              alignSelf: "center",
              fontFamily: "Baloo2-Regular",
              textAlign: "center",
            }}
          >
            nebo nám pošli e-mail na
          </Text>
          <Text
            style={{
              fontFamily: "Baloo2-Bold",
              textDecorationLine: "underline",
            }}
            onPress={() => alert("sdasdasdas")}
            onPressIn={() => {}}
          >
            info@flexifin.cz
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default HelpModal;

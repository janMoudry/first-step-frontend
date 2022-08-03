import { Modal, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
} from "react-native-reanimated";
import { useEffect } from "react";
import { Device } from "../../../../GlobalVars";
import TextItem from "./TextItem";

const InfoModal = ({ onPress, onClose, isTogged }) => {
  const modalData = require("./data.json");

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
        style={[
          {
            alignContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <View
          style={{
            backgroundColor: "rgb(255, 203, 176)",
            width: 300,
            borderRadius: 5,
            alignItems: "center",
            position: "absolute",
            top: 100,
            paddingBottom: 30,
          }}
        >
          {crossIcon}
          {modalData.data.map((item) => (
            <View key={item.id} style={{ marginVertical: 5 }}>
              <TextItem onPress={() => {}} text={item.title} />
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;

import { Modal, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { fontFamilies } from "../../Theme/Theme";

const PasswordInfo = ({ visible, close }) => (
  <Modal visible={visible} transparent>
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "80%",
          backgroundColor: "white",
          padding: 25,
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          style={{ position: "absolute", right: 5, top: 5 }}
          onPress={close}
        >
          <Icon name="close" size={30} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: fontFamilies.MainFamily,
            fontSize: 15,
            textAlign: "center",
          }}
        >
          Heslo musí obsahovat minimálně 7 znaků.
        </Text>
      </View>
    </View>
  </Modal>
);

export default PasswordInfo;

import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors, fontFamilies } from "../../../../Theme/Theme";
import CustomButton from "../../../CustomButton";

const HobbiesSelect = ({ label, onChange }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [hobbiesArray, sethobbiesArray] = useState([]);

  return (
    <View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          width: 300,
          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text
            style={{ fontFamily: fontFamilies.MainFamily }}
          >{`vyber ${label}`}</Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            paddingHorizontal: 10,

            margin: 5,
          }}
        >
          {hobbiesArray.map((item, index) => (
            <View
              key={index + 1}
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text>{item}</Text>
              <TouchableOpacity
                onPress={() => {
                  if (hobbiesArray.length === 1) {
                    sethobbiesArray([]);
                    onChange([]);
                  } else {
                    const arrayAfterDetele = hobbiesArray.filter(
                      (hobby) => hobby !== item,
                    );
                    sethobbiesArray(arrayAfterDetele);
                    onChange(arrayAfterDetele);
                  }
                }}
              >
                <Icon name="close" size={20} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      {isModalVisible && (
        <SelectHobbiesModal
          isModalVisible={isModalVisible}
          closeModal={() => setModalVisible(false)}
          sethobbiesArray={sethobbiesArray}
          hobbiesArray={hobbiesArray}
          onChange={onChange}
        />
      )}
    </View>
  );
};
export default HobbiesSelect;

const SelectHobbiesModal = ({
  isModalVisible,
  closeModal,
  sethobbiesArray,
  hobbiesArray,
  onChange,
}) => {
  const inputModalRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      inputModalRef.current && inputModalRef.current.focus();
    }, 100);
  }, []);

  const [inputedText, setInputedText] = useState("");

  return (
    <Modal transparent visible={isModalVisible}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          height: "100%",
        }}
      >
        <Icon
          name="close"
          size={40}
          style={{ position: "absolute", right: 10, top: 10 }}
          color={"white"}
          onPress={() => closeModal()}
        />
        <View
          style={{
            width: 300,
            height: 50,
            backgroundColor: colors.backgroundMain,
            borderRadius: 10,
          }}
        >
          <TextInput
            placeholder="Napiš svoji zálibu"
            placeholderTextColor={colors.backgroundTabs}
            ref={inputModalRef}
            style={[
              StyleSheet.absoluteFill,
              { fontFamily: fontFamilies.MainFamily, margin: 5 },
            ]}
            onChangeText={(e) => setInputedText(e)}
          />
        </View>
        <TouchableOpacity
          style={{
            width: 150,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: colors.backgroundMain,
            borderRadius: 10,
            marginTop: 10,
          }}
          onPress={() => {
            if (inputedText.length > 3) {
              sethobbiesArray([...hobbiesArray, inputedText]);
              onChange([...hobbiesArray, inputedText]);
              closeModal();
            }
          }}
        >
          <Text
            style={{
              color: colors.backgroundMain,
              fontFamily: fontFamilies.MainFamilyBold,
            }}
          >
            Potvrdit
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

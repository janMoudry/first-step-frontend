import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { fontFamilies } from "../../../../Theme/Theme";

const DescriptionInput = ({ onChange, label }) => {
  const inputRef = useRef(null);

  return (
    <View style={{ width: 300, marginVertical: 10, alignSelf: "center" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
          paddingHorizontal: 5,
        }}
      >
        <Text style={{ fontFamily: fontFamilies.MainFamily }}>{label}</Text>
        <Icon name="pencil" size={20} />
      </View>
      <TouchableOpacity
        onPress={() => inputRef.current && inputRef.current.focus()}
        style={{
          width: 300,
          height: 100,
          borderWidth: 1,
          padding: 5,
          borderRadius: 10,
        }}
      >
        <TextInput
          ref={inputRef}
          style={{ fontFamily: fontFamilies.MainFamily }}
          multiline
          maxLength={150}
          placeholder="max 150 znaků..."
          onChangeText={(e) => onChange(e)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DescriptionInput;

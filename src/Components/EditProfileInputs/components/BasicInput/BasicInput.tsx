import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { fontFamilies } from "../../../../Theme/Theme";

const BasicInput = ({ label, onChange }) => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [inputedText, setInputedText] = useState("");

  return (
    <TouchableOpacity
      style={{
        minWidth: 300,
        height: 50,
        borderWidth: 1,
        marginVertical: 10,
        justifyContent: "center",
        padding: 5,
        borderRadius: 10,
      }}
    >
      {!isInputFocused && (
        <Text style={{ fontFamily: fontFamilies.MainFamily }}>{label}</Text>
      )}
      <Icon
        name="pencil"
        size={20}
        style={{ position: "absolute", right: 5 }}
      />
      <TextInput
        style={[
          StyleSheet.absoluteFill,
          { paddingLeft: 10, fontFamily: fontFamilies.MainFamilyCursive },
        ]}
        onFocus={() => setInputFocused(true)}
        onBlur={() =>
          inputedText.length > 0
            ? setInputFocused(true)
            : setInputFocused(false)
        }
        onChangeText={(text) => {
          setInputedText(text);
        }}
      />
    </TouchableOpacity>
  );
};

export default BasicInput;

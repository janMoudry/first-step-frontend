import React, { useState, useRef, useEffect } from "react";
import { Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../Theme/Theme";

import defaultStyles from "./BasicInput.style";

interface BasicInputProps {
  label: string;
  onChange: Function;
  styles?: {};
  name: string;
}

const BasicInput = ({
  label,
  onChange,
  styles,
  name,
}: BasicInputProps): React.ReactElement => {
  const [inputedText, setInputedText] = useState<string>("");
  const [isFocused, setFocused] = useState<Boolean>(false);

  const [inputRef, setInputFocus] = useFocus();

  return (
    <View
      style={
        isFocused ? defaultStyles.containerFocused : defaultStyles.container
      }
    >
      <TextInput
        ref={inputRef}
        style={defaultStyles.input}
        onChangeText={(e) => {
          setInputedText(e);
          onChange(e);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => inputedText.length === 0 && setFocused(false)}
      />
      <View
        style={
          isFocused
            ? defaultStyles.textContainerFucused
            : defaultStyles.textContainer
        }
      >
        <Text
          onPress={setInputFocus}
          style={isFocused ? defaultStyles.textFocused : defaultStyles.text}
        >
          {label}
        </Text>
      </View>
    </View>
  );
};

export default BasicInput;

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

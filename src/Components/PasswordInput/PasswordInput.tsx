import React, { useState, useRef, useEffect, SetStateAction } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../Theme/Theme";
import Toast from "react-native-toast-message";

import defaultStyles from "./PasswordInput.style";
import PasswordInfo from "./PasswordInfo";

interface PasswordInputProps {
  label: string;
  onChange: React.Dispatch<SetStateAction<string>>;
  styles?: {};
  name: string;
  setFilled?: React.Dispatch<SetStateAction<boolean>>;
}

const PasswordInput = ({
  label,
  onChange,
  setFilled,
  styles,
  name,
}: PasswordInputProps): React.ReactElement => {
  const [inputedText, setInputedText] = useState<string>("");
  const [isFocused, setFocused] = useState<Boolean>(false);

  const [showPassword, setShowPassword] = useState(false);

  const [iconClickedIn, setIconClickedIn] = useState(false);

  const [inputRef, setInputFocus] = useFocus();

  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    onChange(inputedText);
    if (!!setFilled) {
      if (inputedText.length > 6) {
        setFilled(true);
      } else {
        setFilled(false);
      }
    }
  }, [inputedText]);

  const showPasswordIcon = (
    <TouchableOpacity
      style={defaultStyles.iconContainer}
      onPress={() =>
        showPassword ? setShowPassword(false) : setShowPassword(true)
      }
      onPressIn={() => setIconClickedIn(true)}
      onPressOut={() => setIconClickedIn(false)}
    >
      <Icon
        name={showPassword ? "eye" : "eye-slash"}
        size={20}
        color={colors.textMain}
      />
    </TouchableOpacity>
  );

  const showHelpIcon = (
    <TouchableOpacity
      style={defaultStyles.iconContainer}
      onPress={() => setShowHelp(true)}
    >
      <Icon name="info" size={20} color={colors.textMain} />
    </TouchableOpacity>
  );

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
        }}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => inputedText.length === 0 && setFocused(false)}
        secureTextEntry={!showPassword}
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
          style={[
            isFocused ? defaultStyles.textFocused : defaultStyles.text,
            inputedText.length > 6
              ? { color: "green" }
              : inputedText.length > 0
              ? { color: "red" }
              : {},
          ]}
        >
          {label}
        </Text>
      </View>

      {inputedText.length > 0 ? showPasswordIcon : showHelpIcon}
      <PasswordInfo
        visible={showHelp}
        close={() => {
          setShowHelp(false);
        }}
      />
    </View>
  );
};

export default PasswordInput;

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

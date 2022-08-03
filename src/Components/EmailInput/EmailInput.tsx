import React, { useState, useRef, useEffect, SetStateAction } from "react";
import { Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import defaultStyles from "./EmailInput.style";

interface BasicInputProps {
  label: string;
  onChange: React.Dispatch<SetStateAction<string>>;
  styles?: {};
  name: string;
  setFilled: React.Dispatch<SetStateAction<boolean>>;
}

const EmailInput = ({
  label,
  onChange,
  setFilled,
  styles,
}: BasicInputProps): React.ReactElement => {
  const [inputedText, setInputedText] = useState<string>("");
  const [isFocused, setFocused] = useState<Boolean>(false);

  const [inputRef, setInputFocus] = useFocus();

  const checkIcon = <Icon name="check" size={20} color="green" />;

  useEffect(() => {
    onChange(inputedText);

    if (
      inputedText.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, [inputedText]);

  const crossIcon = (
    <Icon
      name="plus"
      size={20}
      color="pink"
      style={{
        transform: [{ rotate: "45deg" }],
        left: -0.5,
        top: 0.5,
      }}
    />
  );

  return (
    <View
      style={[
        isFocused ? defaultStyles.containerFocused : defaultStyles.container,
        styles,
      ]}
    >
      <TextInput
        ref={inputRef}
        style={defaultStyles.input}
        onChangeText={(e) => {
          setInputedText(e);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => (inputedText.length === 0 ? setFocused(false) : null)}
        keyboardType="email-address"
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
            inputedText.match(
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            )
              ? { color: "green" }
              : inputedText.length > 0
              ? { color: "red" }
              : {},
          ]}
        >
          {label}
        </Text>
      </View>
      {/* <View
        style={
          inputedText.length === 0
            ? { display: "none" }
            : defaultStyles.iconContainer
        }
      >
        {inputedText.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
          ? checkIcon
          : crossIcon}
      </View> */}
    </View>
  );
};

export default EmailInput;

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

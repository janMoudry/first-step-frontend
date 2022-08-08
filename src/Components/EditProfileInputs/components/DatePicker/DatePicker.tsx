import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-date-picker";
import Icon from "react-native-vector-icons/Fontisto";
import { fontFamilies } from "../../../../Theme/Theme";

const CustomDatePicker = ({ label, onChange }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date());

  return (
    <TouchableOpacity
      style={{
        width: 300,
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        marginVertical: 10,
        paddingVertical: 5,
        height: 50,
        borderRadius: 10,
        justifyContent: "space-between",
        alignSelf: "center",
      }}
      onPress={() => setShowDatePicker(true)}
    >
      {birthDate.getFullYear() === new Date().getFullYear() ? (
        <Text
          style={{
            fontFamily: fontFamilies.MainFamily,
            position: "absolute",
            left: 5,
          }}
        >
          {label}
        </Text>
      ) : (
        <Text
          style={{
            fontFamily: fontFamilies.MainFamilyCursive,
            position: "absolute",
            left: 5,
          }}
        >
          {birthDate.getDate()}. {birthDate.getMonth()}.
          {birthDate.getFullYear()}
        </Text>
      )}
      <Icon name="date" size={20} style={{ position: "absolute", right: 5 }} />

      <DatePicker
        style={{ position: "absolute" }}
        modal
        mode="date"
        open={showDatePicker}
        date={birthDate}
        onConfirm={(date) => {
          setShowDatePicker(false);

          const formatedDate = foramtDate(date);

          setBirthDate(date);
          onChange(formatedDate);
        }}
        onCancel={() => {
          setShowDatePicker(false);
        }}
      />
    </TouchableOpacity>
  );
};

export default CustomDatePicker;

const foramtDate = (date: Date): string => {
  let day = "";
  if (date.getDay() < 10) {
    day = `0${date.getDay()}`;
  } else {
    day = date.getDay().toString();
  }

  let month = "";
  if (date.getMonth() < 10) {
    month = `0${date.getMonth()}`;
  } else {
    month = date.getMonth().toString();
  }
  const year = date.getFullYear().toString();

  return `${day}.${month}.${year}`;
};

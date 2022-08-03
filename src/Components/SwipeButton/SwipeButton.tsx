import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SwipeButton = ({ isModalTogged, setModalTogged }) => {
  return (
    <TouchableOpacity
      style={{
        width: 165,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
      onPress={() => setModalTogged(true)}
    >
      <View
        style={{
          width: 150,
          height: 25,
          backgroundColor: isModalTogged ? "rgb(156, 227, 125)" : "white",
          paddingLeft: 12,
          paddingRight: 10,
          borderRadius: 25,
        }}
      >
        <Text
          style={{
            color: "black",
            textAlign: isModalTogged ? "left" : "right",
            fontFamily: "Baloo2-Bold",
          }}
        >
          {!isModalTogged ? " Potřebuji pomoc" : "Zavřít pomoc"}
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          height: 30,
          width: 30,
          backgroundColor: "rgb(229, 182, 230)",
          left: !isModalTogged ? 0 : 135,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 25,
            width: 20,
            height: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="question" size={15} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SwipeButton;

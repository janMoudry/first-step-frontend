import React from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import appManager from "../../../../useLogic/apiCalls";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import fileStyles from "./ProfilCardModal.style";
import { colors } from "../../../../Theme/Theme";

const ProfilModal = ({ userData, setModalShow, isModalShow, age }) => (
  <Modal visible={isModalShow} transparent animationType="fade">
    <TouchableOpacity
      style={fileStyles.background}
      onPress={() => setModalShow(false)}
    />
    <View style={fileStyles.container}>
      <Image
        style={fileStyles.image}
        resizeMode="cover"
        source={{
          uri: appManager.images(),
        }}
      />
      <View style={fileStyles.innerContainer}>
        <View style={fileStyles.nameContainer}>
          <Text style={fileStyles.nameText}>{userData.name}</Text>
          <Text style={fileStyles.ageText}>({age})</Text>
        </View>
        <Text style={fileStyles.descriptionnText}>{userData.description}</Text>
        <View style={fileStyles.hobbiesContainer}>
          <Text style={fileStyles.hobbiesTitle}>Baví mě:</Text>
          {userData.hobbies.map((hobby, index) => (
            <Text style={fileStyles.hobbiesText} key={hobby}>
              {index + 1 !== userData.hobbies.length
                ? ` ${hobby},`
                : `${hobby}`}
            </Text>
          ))}
        </View>
      </View>
    </View>
    <TouchableOpacity
      onPress={() => setModalShow(false)}
      style={[fileStyles.buttonContainer, { left: 15, borderColor: "red" }]}
    >
      <Icon name="close" size={70} color={colors.textMain} />
    </TouchableOpacity>
    <TouchableOpacity
      style={[fileStyles.buttonContainer, { right: 15, borderColor: "green" }]}
    >
      <Icon name="email-send-outline" size={50} color={colors.textMain} />
    </TouchableOpacity>
  </Modal>
);

export default ProfilModal;

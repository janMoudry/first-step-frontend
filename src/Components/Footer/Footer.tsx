import React, { useState } from "react";
import { View, Text } from "react-native";
import { getText } from "../../GlobalVars/texts";
import MainButton from "../MainButton";
import SwipeButton from "../SwipeButton";
import HelpModal from "./components/HelpModal";
import InfoModal from "./components/InfoModal";
import defaultStyles from "./Footer.style";

const Footer = () => {
  const [toggedHelpModal, setToggedHelpModal] = useState(false);
  const [toggedInfoModal, setToggedInfoModal] = useState(false);

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.title}> {getText("PROMO_FOOTER")} </Text>
      <MainButton
        label="Informace pro klienty"
        styles={defaultStyles.infoButton}
        onPress={() => setToggedInfoModal(true)}
        textStyle={defaultStyles.infoButtonText}
      />
      <SwipeButton
        isModalTogged={toggedHelpModal}
        setModalTogged={setToggedHelpModal}
      />
      <Text style={defaultStyles.description}> {getText("COPYRIGHT")} </Text>
      <HelpModal
        isTogged={toggedHelpModal}
        onClose={() => {
          setToggedHelpModal(false);
        }}
        onPress={() => {}}
      />
      <InfoModal
        isTogged={toggedInfoModal}
        onClose={() => {
          setToggedInfoModal(false);
        }}
        onPress={() => {}}
      />
    </View>
  );
};

export default Footer;

import { useEffect, useState } from "react";
import { Modal, Text, View } from "react-native";

import TableColomn from "../../Components/TableColomn";
import { getText } from "../../Storage/getText";
import { getLanguage } from "../../Storage/storage";
import { colors } from "../../Theme/Theme";
import CustomModal from "./Modal";

const Setting = () => {
  const [typeModal, setTypeModal] = useState("");

  const [currentLanguage, setCurrentLanguage] = useState("");
  const [isLanguageLoad, setLanguageLoad] = useState(false);

  useEffect(() => {
    const getCurrentLanguage = async () => {
      try {
        const currentLanguage = await getLanguage();
        setCurrentLanguage(currentLanguage);
        setLanguageLoad(true);
      } catch (err) {
        console.log(err);
        setLanguageLoad(false);
      }
    };
    getCurrentLanguage();
  }, []);

  const getFullNameOfLanguage = (language) => {
    switch (language) {
      case "eng":
        return "english";
      case "cz":
        return "čeština";
    }
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.backgroundMain,
        alignItems: "center",
      }}
    >
      {isLanguageLoad && (
        <TableColomn
          label={getText("CHOOSE_LANGUAGE")}
          iconName="right"
          onPress={() => setTypeModal("language")}
          iconDescription={getFullNameOfLanguage(currentLanguage)}
        />
      )}
      <TableColomn
        label={getText("CHOOSE_THEME")}
        iconName="right"
        onPress={() => setTypeModal("theme")}
        iconDescription="Dark"
      />

      <CustomModal closeModal={setTypeModal} typeOfModal={typeModal} />
    </View>
  );
};

export default Setting;

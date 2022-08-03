import { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import TableColomn from "../../../Components/TableColomn";
import { getText } from "../../../Storage/getText";
import { setLanguage, setTheme } from "../../../Storage/storage";
import { colors, fontFamilies } from "../../../Theme/Theme";
import { getLanguage } from "../../../Storage/storage";

const CustomModal = ({ typeOfModal, closeModal }) => {
  const [isModalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState<{
    name: string;
    description: string;
    buttons: Array<{
      name: string;
      onPress: () => void;
      iconName: string;
    }>;
  } | null>(null);

  const [currentLanguage, setCurrentLanguage] = useState("");

  useEffect(() => {
    const fetchLanguage = async () => {
      const language = await getLanguage();
      setCurrentLanguage(language);
    };
    fetchLanguage();
  }, []);

  useEffect(() => {
    switch (typeOfModal) {
      case "language":
        setModalShow(true);
        setModalData({
          name: "language",
          description: "This is Modal for Language",
          buttons: [
            {
              name: getText("CZECH"),
              onPress: () => setLanguage("cz"),
              iconName: "cz" === currentLanguage ? "pushpin" : "pushpino",
            },
            {
              name: getText("ENGLISH"),
              onPress: () => setLanguage("eng"),
              iconName: "eng" === currentLanguage ? "pushpin" : "pushpino",
            },
          ],
        });
        break;
      case "theme":
        setModalShow(true);
        setModalData({
          name: "theme",
          description: "This is modal for theme",
          buttons: [
            {
              name: "dark",
              onPress: () => setTheme("black"),
              iconName: "pushpino",
            },
            {
              name: "light",
              onPress: () => setTheme("white"),
              iconName: "pushpino",
            },
          ],
        });
        break;
    }
  }, [typeOfModal]);

  return (
    <Modal visible={isModalShow} transparent animationType="fade">
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <View
          style={{
            backgroundColor: colors.backgroundMain,
            alignItems: "center",
            paddingVertical: 20,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              marginRight: 3,
              position: "absolute",
            }}
            onPress={() => {
              setModalShow(false), closeModal("");
            }}
          >
            <Icon name="close" size={30} color={colors.textMain} />
          </TouchableOpacity>
          {isModalShow && (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: fontFamilies.MainFamilyBold,
                  color: colors.textMain,
                  fontSize: 20,
                }}
              >
                {modalData.name}
              </Text>
              {modalData.buttons.map((button) => (
                <View
                  key={button.name}
                  style={{
                    width: 300,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 15,
                  }}
                >
                  <TableColomn
                    label={button.name}
                    iconName={button.iconName}
                    onPress={button.onPress}
                  />
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

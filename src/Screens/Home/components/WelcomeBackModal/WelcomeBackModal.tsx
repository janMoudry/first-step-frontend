import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, Modal, Text, View } from "react-native";
import CustomButton from "../../../../Components/CustomButton";
import { isLoged } from "../../../../Storage/storage";
import { fontFamilies } from "../../../../Theme/Theme";
import appManager from "../../../../useLogic/apiCalls";

const WelcomeBackModal = () => {
  const navigation = useNavigation();
  const [isModalShow, setModalShow] = useState(true);
  const [checkingLogin, setCheckingLogin] = useState(false);

  useEffect(() => {
    const checkLoginAlways = async () => {
      setCheckingLogin(true);
      const login = await isLoged();

      if (login.stayLogged === "true") {
        await checkLogin(login.username, login.password);
      } else {
        setCheckingLogin(false);
      }
    };
    checkLoginAlways();
  }, []);

  const checkLogin = async (savedUsername?: string, savedPassword?: string) => {
    try {
      const loginRight = await appManager.login(
        "D8:0B:9A:20:45:47",
        savedUsername,
        savedPassword,
      );

      if (loginRight) {
        setModalShow(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal visible={isModalShow} transparent animationType="fade" accessible>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />
      <Text
        style={{
          fontSize: 50,
          position: "absolute",
          top: 10,
          alignSelf: "center",
        }}
      >
        LOGO
      </Text>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 300,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderWidth: 2,
          alignItems: "center",
          backgroundColor: "pink",
        }}
      >
        {checkingLogin ? (
          <ActivityIndicator size={50} />
        ) : (
          <>
            <Text
              style={{ fontFamily: fontFamilies.MainFamilyBold, fontSize: 40 }}
            >
              Welcome
            </Text>
            <Text
              style={{
                fontFamily: fontFamilies.MainFamilyCursive,
                paddingHorizontal: 35,
              }}
            >
              In publishing and graphic design, lorem ipsum is common
              placeholder text used to demonstrate the graphic elements of a
              document or visual
            </Text>
            <View style={{ flexDirection: "column" }}>
              <CustomButton
                label="Přihlásit se"
                onPress={() => {
                  navigation.navigate("Login"), setModalShow(false);
                }}
              />
              <CustomButton
                label="Registrovat se"
                onPress={() => {
                  navigation.navigate("Register"), setModalShow(false);
                }}
              />
            </View>
          </>
        )}
      </View>
    </Modal>
  );
};

export default WelcomeBackModal;

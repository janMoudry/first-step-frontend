import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { colors, fontFamilies } from "../../Theme/Theme";
import BasicInput from "../../Components/BasicInput";
import PasswordInput from "../../Components/PasswordInput";
import CheckButton from "../../Components/CheckButton";
import { useEffect, useState } from "react";
import appManager from "../../useLogic/apiCalls";
import { logIn } from "../../Storage/storage";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isCheckingLogin, setCheckingLogin] = useState(false);
  const [stayLoggedCheck, setStayLoggedCheck] = useState(false);

  const showToast = (message) => {
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: message,
    });
  };

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
    return () => {};
  }, [navigation]);

  const checkLogin = async (savedUsername?: string, savedPassword?: string) => {
    setCheckingLogin(true);

    const timeout = setTimeout(() => {
      showToast("čas pro přihlášení vypršel");
      setCheckingLogin(false);
      clearTimeout(timeout);
      return;
    }, 20000);

    try {
      const loginRight = await appManager.login(
        "D8:0B:9A:20:45:47",
        savedUsername ? savedUsername : username,
        savedPassword ? savedPassword : password,
      );

      if (loginRight?.shouldLogin) {
        await logIn(username, password, stayLoggedCheck);
        navigation.navigate("Home");
        clearTimeout(timeout);
      } else if (loginRight?.data) {
        showToast("špatný e-mail nebo heslo");
      }
    } catch (err) {
      console.log(err);
    }
    setCheckingLogin(false);
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "orange",
        alignItems: "center",
        paddingVertical: 20,
      }}
    >
      <Text
        style={{
          fontFamily: fontFamilies.MainFamilyBold,
          fontSize: 50,
          color: colors.textMain,
        }}
      >
        First Step
      </Text>
      <Text
        style={{
          fontFamily: fontFamilies.MainFamilyCursive,
          fontSize: 15,
          color: colors.backgroundMain,
          paddingHorizontal: 50,
        }}
      >
        {`Lets make your `}
        <Text
          style={{
            fontFamily: fontFamilies.MainFamilyCursive,
            paddingVertical: 10,
            fontSize: 20,
            color: "yellow",
          }}
        >
          first step
        </Text>
        {` to meet your soulsmate`}
      </Text>

      <Text
        style={{
          fontSize: 10,
          fontFamily: fontFamilies.MainFamily,
          position: "absolute",
          bottom: 5,
          textAlign: "center",
        }}
      >
        Práva jsou vyhrazena jen mně
      </Text>
      <View style={{ padding: 15 }}></View>
      <View
        style={{
          width: "100%",
          height: 500,
          position: "absolute",
          bottom: 0,
          alignItems: "center",
          backgroundColor: colors.backgroundMain,
          justifyContent: "center",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <View
          style={{
            top: 0,
            alignItems: "center",
            justifyContent: "center",
            margin: 2,
            width: "100%",
            marginBottom: 50,
          }}
        >
          <Text
            style={{
              fontSize: 40,
              fontFamily: fontFamilies.MainFamilyBold,
              color: colors.textMain,
              top: -10,
            }}
          >
            Login
          </Text>
          <BasicInput
            name="name"
            label="Přihlašovací jméno"
            onChange={setUsername}
          />
          <PasswordInput name="password" label="Heslo" onChange={setPassword} />
          <CheckButton
            isCheck={stayLoggedCheck}
            label="Zůstat přihlášený"
            onCheck={setStayLoggedCheck}
          />
        </View>

        {isCheckingLogin ? (
          <ActivityIndicator
            style={{
              position: "absolute",
              bottom: 15,
              alignSelf: "center",
              alignItems: "center",
              width: "100%",
            }}
            size={60}
          />
        ) : (
          <View
            style={{
              bottom: 15,
              alignSelf: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
              justifyContent: "space-around",
              marginTop: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => checkLogin()}
              style={{ marginBottom: 30 }}
            >
              <Icon name={"login"} size={50} color={colors.backgroundTabs} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={{
                  fontFamily: fontFamilies.MainFamilyCursive,
                  color: colors.backgroundTabs,
                  textDecorationLine: "underline",
                }}
              >
                Založit nový účet
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <Toast />
    </View>
  );
};

export default Login;

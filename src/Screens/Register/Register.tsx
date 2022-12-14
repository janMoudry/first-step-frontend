import { ActivityIndicator, Text, View } from "react-native";
import BasicInput from "../../Components/BasicInput";
import PasswordInput from "../../Components/PasswordInput";
import EmailInput from "../../Components/EmailInput";
import { colors, fontFamilies } from "../../Theme/Theme";
import CustomButton from "../../Components/CustomButton";
import CheckButton from "../../Components/CheckButton";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import defaultStyles from "./Register.style";
import appManager from "../../useLogic/apiCalls";
import deviceInfoModule from "react-native-device-info";
import { logIn } from "../../Storage/storage";

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [isEmailFilled, setEmailFilled] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordFilled, setPasswordFilled] = useState(false);

  const [passwordAgain, setPasswordAgain] = useState("");

  const [isAllFilled, setAllFilled] = useState(false);

  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, [navigation]);

  useEffect(() => {
    if (!!isEmailFilled && !!isPasswordFilled && password === passwordAgain) {
      setAllFilled(true);
    } else {
      setAllFilled(false);
    }
  }, [email, password, passwordAgain]);

  const createLogin = async () => {
    setLoad(false);
    const phoneId = await deviceInfoModule.getAndroidId();
    const data = await appManager.register(phoneId, email, password);

    if (data.error === 200) {
      await logIn(email, password, false);
      navigation.navigate("EditProfile");
    }
    setLoad(true);
  };

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.title}>First Step</Text>
      <Text style={defaultStyles.promoText}>
        {`Lets make your `}
        <Text style={defaultStyles.promoTextTitle}>first step</Text>
        {` to meet your soulsmate`}
      </Text>

      <View
        style={
          isLoad
            ? defaultStyles.innerContainer
            : [defaultStyles.innerContainer, { height: 200 }]
        }
      >
        {isLoad ? (
          <View style={defaultStyles.formContainer}>
            <Text style={defaultStyles.formTitle}>Registration</Text>
            <EmailInput
              label="E-mail"
              name="email"
              onChange={setEmail}
              setFilled={setEmailFilled}
            />
            <PasswordInput
              name="password"
              label="Heslo"
              onChange={setPassword}
              setFilled={setPasswordFilled}
            />
            <PasswordInput
              name="password"
              label="Heslo znovu"
              onChange={setPasswordAgain}
            />
            <View style={defaultStyles.buttonContainer}>
              <CheckButton
                isCheck={true}
                label="Souhlas??m s GDPR"
                onCheck={() => {}}
              />
              <CheckButton
                isCheck={true}
                label="Souhlas??m s Obchodn??  podm??nky"
                onCheck={() => {}}
              />
              <CustomButton
                label="Vytvo??it profil"
                onPress={() => createLogin()}
                disabled={!isAllFilled}
              />
              <CustomButton
                label="Vytvo??it profil"
                onPress={() => navigation.navigate("EditProfile")}
              />
            </View>
          </View>
        ) : (
          <ActivityIndicator size={200} color={"orange"} />
        )}
      </View>
    </View>
  );
};

export default Register;

import React, { useEffect, useState } from "react";
import { ActivityIndicator, Modal, ScrollView, View } from "react-native";

import UploadImage from "./components/UploadImage";
import MyCamera from "./components/MyCamera";
import { colors } from "../../Theme/Theme";
import EditProfileInputs from "../../Components/EditProfileInputs/EditProfileInputs";
import CustomButton from "../../Components/CustomButton";
import { isLoged } from "../../Storage/storage";
import appManager from "../../useLogic/apiCalls";
import deviceInfoModule from "react-native-device-info";
import { Login } from "../../Types/requestTypes";
import { StorageLogin } from "../../Types/storageTypes";
import { useNavigation } from "@react-navigation/native";
import { updatingLocation } from "../../useLogic/generalLogic";

const EditProfile = (route, nav) => {
  console.log(route);

  const navigation = useNavigation();

  const [canEdit, setCanEdit] = useState(false);

  const [showCamera, setShowCamera] = useState(false);
  const [chosenImage, setChosenImage] = useState(null);
  const [image, setImage] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState("");
  const [midllename, setMidllename] = useState("");
  const [surname, setSurname] = useState("");
  const [birth, setBirth] = useState("");
  const [description, setDescription] = useState("");
  const [hobbies, setHobbies] = useState<Array<string>>([]);

  const inputsArray = [
    { type: "basic", label: "Jméno", onchange: setName, id: 0 },
    {
      type: "basic",
      label: "Prostřední jméno",
      onchange: setMidllename,
      id: 1,
    },
    { type: "basic", label: "Příjmení", onchange: setSurname, id: 2 },
    { type: "datePicker", label: "Narození", onchange: setBirth, id: 3 },
    { type: "description", label: "popis", onchange: setDescription, id: 4 },
    { type: "hobbies", label: "Záliby", onchange: setHobbies, id: 5 },
  ];

  const createProfile = async () => {
    setCanEdit(false);

    const phoneId: string = await deviceInfoModule.getAndroidId();

    const userData = {
      phoneId: phoneId,
      name: name,
      midllename: midllename,
      surname: surname,
      birth: birth,
      description: description,
      hobbies: hobbies,
    };

    const useProfile = await appManager.editProfile(userData);
    console.log(useProfile);
    if (useProfile.error === 200) {
      updatingLocation();
      navigation.navigate("Home");
    } else {
      setCanEdit(true);
    }
  };

  useEffect(() => {
    const canEdit = async () => {
      const data: StorageLogin = await isLoged();

      const PhoneId = await deviceInfoModule.getAndroidId();

      if (data.username && data.password) {
        const shouldLogin: Login = await appManager.login(
          PhoneId,
          data.username,
          data.password,
        );

        if (shouldLogin.shouldLogin) setCanEdit(true);
      }
    };
    canEdit();
  }, []);

  return canEdit ? (
    <>
      <View
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
        }}
      >
        <ScrollView style={{ width: "100%" }}>
          <UploadImage
            image={chosenImage}
            setImage={setChosenImage}
            setImageToSave={setImage}
            setShowCamera={setShowCamera}
          />

          {inputsArray.map(({ type, label, onchange, id }) => (
            <EditProfileInputs
              key={id}
              type={type}
              label={label}
              onChange={onchange}
            />
          ))}
          <View style={{ flexDirection: "row" }}></View>
          <Modal visible={isModalVisible} />

          <CustomButton label="Vytvořit profil" onPress={createProfile} />
          <MyCamera
            isActive={showCamera}
            closeCamera={() => setShowCamera(false)}
            setImage={setChosenImage}
            setImageToSave={setImage}
            image={image}
          />
        </ScrollView>
      </View>
    </>
  ) : (
    <ActivityIndicator size={200} />
  );
};

export default EditProfile;

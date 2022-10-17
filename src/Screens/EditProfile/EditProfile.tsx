import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Modal,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
import Icon from "react-native-vector-icons/SimpleLineIcons";
// import * as ImagePicker from "expo-image-picker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const EditProfile = (route, nav) => {
  const navigation = useNavigation();

  const [canEdit, setCanEdit] = useState(false);

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

    const createFormData = (photo) => {
      const data = new FormData();

      data.append("photo", {
        name: photo.fileName,
        type: photo.type,
        uri:
          Platform.OS === "ios" ? photo.uri.replace("file://", "") : photo.uri,
      });

      return data;
    };

    const useProfile = await appManager.editProfile(userData);

    const imageData = await appManager.saveImage(
      createFormData(image),
      phoneId,
    );
    console.log(imageData, "afjbasufbasufbauiobfuasbfuiabsfiuab");

    if (useProfile.error === 200) {
      updatingLocation();
      navigation.navigate("Home");
    } else {
      setCanEdit(true);
    }
    setCanEdit(true);
  };

  useEffect(() => {
    const canEdit = async () => {
      try {
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
      } catch (err) {
        console.log(err);
      }
    };
    canEdit();
    return () => {};
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
          <UploadImage image={image} showModal={setModalVisible} />

          {inputsArray.map(({ type, label, onchange, id }) => (
            <EditProfileInputs
              key={id}
              type={type}
              label={label}
              onChange={onchange}
            />
          ))}
          <View style={{ flexDirection: "row" }}></View>

          <CustomButton label="Vytvořit profil" onPress={createProfile} />
        </ScrollView>
        <CameraModal
          setImage={setImage}
          setModalVisible={setModalVisible}
          isModalVisible={isModalVisible}
        />
      </View>
    </>
  ) : (
    <ActivityIndicator size={200} />
  );
};

export default EditProfile;

const CameraModal = ({ setImage, setModalVisible, isModalVisible }) => {
  const getImage = async (type) => {
    switch (type) {
      case "galery":
        const imageGalery = await launchImageLibrary({
          maxWidth: 500,
          maxHeight: 500,
          mediaType: "photo",
        });
        if (!!imageGalery.assets) {
          setImage(imageGalery.assets[0]);
          setModalVisible(false);
        }

        return;
      case "camera":
        const imageCamera = await launchCamera({
          mediaType: "photo",
          saveToPhotos: true,
          cameraType: "front",
          maxHeight: 500,
          maxWidth: 500,
        });
        if (!!imageCamera.assets) {
          setImage(imageCamera.assets[0]);
          setModalVisible(false);
        }

        return;
    }
  };

  return (
    <Modal transparent visible={isModalVisible}>
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "20%",
            backgroundColor: colors.backgroundMain,
            position: "absolute",
            bottom: 0,
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
              height: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => getImage("camera")}
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                width: 80,
                height: 80,
                borderRadius: 50,
              }}
            >
              <Icon name="camera" size={50} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                width: 80,
                height: 80,
                borderRadius: 50,
              }}
              onPress={() => getImage("galery")}
            >
              <Icon name="folder-alt" size={50} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

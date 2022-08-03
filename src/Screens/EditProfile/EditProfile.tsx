import { Linking, Modal, TouchableOpacity, View } from "react-native";
import UploadImage from "./components/UploadImage";
import MyCamera from "./components/MyCamera";
import { useState } from "react";
import { colors } from "../../Theme/Theme";
import EditProfileInputs from "../../Components/EditProfileInputs/EditProfileInputs";
import inputsArray from "./inputs";
import Icon from "react-native-vector-icons/AntDesign";
import ScanButton from "../../Components/ScanButton";
import CustomButton from "../../Components/CustomButton";
import LinearGradient from "react-native-linear-gradient";

const EditProfile = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [chosenImage, setChosenImage] = useState(null);
  const [image, setImage] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <LinearGradient
        colors={[colors.backgroundTabs, colors.backgroundMain]}
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
        }}
      >
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

        <CustomButton label="Vytvořit profil" />
        <MyCamera
          isActive={showCamera}
          closeCamera={() => setShowCamera(false)}
          setImage={setChosenImage}
          setImageToSave={setImage}
          image={image}
        />
      </LinearGradient>
    </>
  );
};

export default EditProfile;

import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, fontFamilies } from "../../../../Theme/Theme";
import { getAge } from "../../../../useLogic/generalLogic";
import appManager from "../../../../useLogic/apiCalls";
import ProfilModal from "./ProfilCardModal";

const ProfilCard = ({ phoneId, setDoneScanning }) => {
  const [userData, setUserData] = useState({});
  const [isLoad, setLoad] = useState(false);

  const [isModalShow, setModalShow] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await appManager.fetchUserDataByPhoneId(phoneId);

        data?.data
          ? (setUserData(data.data), setDoneScanning(false), setLoad(true))
          : null;
      } catch (err) {
        console.log(err);
        setLoad(false);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <View>
        {isLoad ? (
          <TouchableOpacity
            style={{
              width: 150,
              height: 160,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setModalShow(true)}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginTop: -10,
              }}
              source={{
                uri: appManager.images("image", true),
              }}
            />
            <Text
              style={{
                fontFamily: fontFamilies.MainFamilyBold,
                color: colors.textMain,
                fontSize: 18,
                alignSelf: "center",
                position: "absolute",
                bottom: 5,
              }}
            >
              {userData.name}
            </Text>
            <ProfilModal
              isModalShow={isModalShow}
              setModalShow={setModalShow}
              userData={userData}
              age={getAge(userData.birth)}
            />
          </TouchableOpacity>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </>
  );
};

export default ProfilCard;

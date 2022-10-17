import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { colors, fontFamilies } from "../../Theme/Theme";

import Icon from "react-native-vector-icons/FontAwesome";
import BasicInfo from "./components/BasicInfo";
import HobbiesAndLinks from "./components/HobbiesAndLinks";
import appManager from "../../useLogic/apiCalls";
import deviceInfoModule from "react-native-device-info";
import { getAge } from "../../useLogic/generalLogic";
import AsyncStorage from "@react-native-community/async-storage";
import FastImage from "react-native-fast-image";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState<{
    id: number;
    name: string;
    surname: string;
    birth: string;
    location: string;
    links: Array<{ name: string; url: string }>;
    hobbies: Array<string>;
    midllename: string | null;
    description: string;
  }>(null);

  const [isLoaded, setLoaded] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    const fetch = async () => {
      const phoneId = await deviceInfoModule.getAndroidId();
      setImageUrl(`http://10.0.0.58:3001/getImage/${phoneId}`);
      console.log();

      const data = await appManager.fetchUserDataByPhoneId(phoneId);
      setUserData(data);
      setLoaded(true);
    };
    fetch();
    return () => {};
  }, []);
  console.log(imageUrl);

  return (
    <ScrollView style={{ width: "100%" }}>
      <View
        style={{
          width: "100%",

          backgroundColor: colors.backgroundMain,
          alignItems: "center",
        }}
      >
        {isLoaded ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.backgroundMain,
            }}
          >
            {imageUrl ? (
              <FastImage
                key={new Date().toString()}
                style={{
                  width: Dimensions.get("screen").width,
                  height: Dimensions.get("screen").height / 2,
                }}
                source={{
                  uri: imageUrl,
                  cache: FastImage.cacheControl.web,
                }}
              />
            ) : (
              <ActivityIndicator />
            )}

            <View
              style={{
                backgroundColor: colors.backgroundMain,
                width: Dimensions.get("screen").width,
                height: Dimensions.get("screen").height / 2 - 40,
                marginTop: -40,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
              }}
            >
              <BasicInfo
                name={`${userData.name} ${
                  !!userData.midllename ? `${userData.midllename} ` : ""
                }${userData.surname}`}
                age={getAge(userData.birth)}
                description={userData.description}
              />
              <HobbiesAndLinks hobbies={userData.hobbies} />
            </View>
          </View>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </ScrollView>
  );
};

export default Profile;

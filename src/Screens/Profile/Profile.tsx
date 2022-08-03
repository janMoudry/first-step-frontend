import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { colors, fontFamilies } from "../../Theme/Theme";
import { useEffect, useLayoutEffect, useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import BasicInfo from "./components/BasicInfo";
import HobbiesAndLinks from "./components/HobbiesAndLinks";
import appManager from "../../useLogic/apiCalls";

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

  const [isLoad, setLoad] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      const data = await appManager.fetchUserDataByPhoneId("D8:0B:9A:20:45:47");
      setUserData(data);
      setLoad(true);
    };
    fetch();
    return () => {};
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={() => alert("go to edit screen")}
        >
          <Icon name="edit" size={30} color={colors.textMain} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <ScrollView style={{ width: "100%" }}>
      <View
        style={{
          width: "100%",

          backgroundColor: colors.backgroundMain,
          alignItems: "center",
        }}
      >
        {isLoad ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.backgroundMain,
            }}
          >
            <Image
              style={{
                width: Dimensions.get("screen").width,
                height: Dimensions.get("screen").height / 2,
              }}
              source={{
                uri: appManager.images("image", true),
              }}
            />
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
              <HobbiesAndLinks
                hobbies={userData.hobbies}
                links={userData.links}
              />
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

const getAge = (birth: string): string => {
  const userYear = parseInt(birth.slice(6, 10));
  const userMonth = parseInt(birth.slice(3, 5));
  const userDay = parseInt(birth.slice(0, 2));

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  let age = currentYear - userYear;

  if (currentMonth < userMonth) {
    age--;
  } else if (currentMonth === userMonth) {
    if (currentDay > userDay) {
      age--;
    }
  }

  return age.toString();
};

import { View, Text, AppState } from "react-native";

import React, { useEffect, useState } from "react";
import ScanButton from "../../Components/ScanButton";
import appManager from "../../useLogic/apiCalls";
import fileStyles from "./Home.style";
import WelcomeBackModal from "./components/WelcomeBackModal";
import ProfileCard from "./components/ProfilCard";
import deviceInfoModule from "react-native-device-info";
import Toast from "react-native-toast-message";
import { handleAppStateChange } from "../../useLogic/generalLogic";
import BackgroundFetch from "react-native-background-fetch";

const Home = () => {
  const [isScanning, setScanning] = useState(false);
  const [doneScanning, setDoneScanning] = useState(false);
  const [isFirstScan, setFirstScan] = useState(true);
  const [event, setEvent] = useState([]);

  const [arrayOfIds, setArrayOfIds] = useState<
    Array<{ _id: string; phoneId: string; error: number }>
  >([]);

  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: "Žádná zařízení v okolí",
    });
  };

  useEffect(() => {
    AppState.addEventListener("change", handleAppStateChange);
  }, []);

  const startScanForPhone = async () => {
    setScanning(true);
    try {
      const phoneId = await deviceInfoModule.getAndroidId();

      const deviceInLocation = await appManager.findDevicesInLocation(phoneId); //+token

      if (deviceInLocation?.error === 404) {
        showToast();
      }
      console.log(deviceInLocation);

      setArrayOfIds(deviceInLocation);
      setDoneScanning(true);
      setScanning(false);
      setFirstScan(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={fileStyles.container}>
      <View style={fileStyles.cardContainer}>
        {!isScanning
          ? !!arrayOfIds &&
            arrayOfIds.map((item) => {
              return (
                <ProfileCard
                  key={item._id}
                  setDoneScanning={setDoneScanning}
                  phoneId={item.phoneId}
                />
              );
            })
          : null}
      </View>

      <View style={fileStyles.buttonContainer}>
        <ScanButton
          onPress={startScanForPhone}
          scanning={isScanning}
          doneScanning={doneScanning}
          firstScan={isFirstScan}
        />
      </View>
      <WelcomeBackModal />
      <Toast />
    </View>
  );
};

export default Home;

import { View, Text } from "react-native";

import { useState } from "react";
import ScanButton from "../../Components/ScanButton";
import appManager from "../../useLogic/apiCalls";
import fileStyles from "./Home.style";
import WelcomeBackModal from "./components/WelcomeBackModal";
import GetLocation from "react-native-get-location";
import deviceInfoModule from "react-native-device-info";
import Toast from "react-native-toast-message";

const Home = () => {
  const [isScanning, setScanning] = useState(false);
  const [doneScanning, setDoneScanning] = useState(false);
  const [isFirstScan, setFirstScan] = useState(true);

  const [arrayOfIds, setArrayOfIds] = useState([]);

  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: "Žádná zařízení v okolí",
    });
  };

  const startScanForPhone = async () => {
    setScanning(true);
    try {
      const currentLocation = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      });
      const phoneId = deviceInfoModule.getAndroidId();
      await appManager.updateLocation(
        phoneId,
        currentLocation.latitude,
        currentLocation.longitude,
      );

      const deviceInLocation = await appManager.findDevicesInLocation(phoneId);
      if (deviceInLocation?.error === 404) {
        showToast();
      }
      setArrayOfIds(deviceInLocation);
      setDoneScanning(true);
      setTimeout(() => setDoneScanning(false), 5000);
      setScanning(false);
      setFirstScan(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={fileStyles.container}>
      {!isScanning
        ? arrayOfIds?.error !== 404 &&
          arrayOfIds.map((item) => {
            return (
              <Text key={item.phoneId}>
                {item.phoneId}
                {item.latitude}
                {item.longitude}
              </Text>
            );
          })
        : null}

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

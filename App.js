import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import FirstStep_app from "./src/index.app";
import { Text } from "react-native";
import { initialStorage, getLanguage } from "./src/Storage/storage";
import RNBluetoothClassic from "react-native-bluetooth-classic";
import deviceInfoModule from "react-native-device-info";

import { setLanguageFoTexts } from "./src/Storage/getText";
import getAllPermission from "./permissionDialogs";
import AppLoading from "./src/Screens/AppLoading";

const App = () => {
  const [isBluUnable, setBluUnable] = useState(false);
  const [isLoad, setLoad] = useState(false);
  const [phoneId, setPhoneId] = useState(null);
  const intervalForUpdateLocation = useRef(null);

  useLayoutEffect(() => {
    const getPhoneInfo = async () => {
      const osName = await deviceInfoModule.getSystemName();
      if (osName === "Android") {
        const androidId = await deviceInfoModule.getAndroidId();
        setPhoneId(androidId);
      }
    };
    getPhoneInfo();
  }, []);

  useEffect(() => {
    const fetchInitalSetting = async () => {
      const androidVersion = deviceInfoModule.getSystemVersion();
      const deviceOS = deviceInfoModule.getSystemName();

      androidVersion > 11 && deviceOS === "Android" && getAllPermission();
      getAllPermission();
      await initialStorage();
      const language = await getLanguage();
      await setLanguageFoTexts(language);
      setLoad(true);
    };
    fetchInitalSetting();

    const setBluetooth = async () => {
      const isAvaiable = await RNBluetoothClassic.isBluetoothAvailable();
      const isEnabled = await RNBluetoothClassic.isBluetoothEnabled();

      const timeout = setTimeout(() => {
        if (isAvaiable && isEnabled) {
          setBluUnable(true);
        } else {
          RNBluetoothClassic.requestBluetoothEnabled();
        }
        clearTimeout(timeout);
      }, 2000);
    };

    setBluetooth();
  }, []);

  RNBluetoothClassic.onBluetoothDisabled(() => {
    setBluUnable(false);
    RNBluetoothClassic.requestBluetoothEnabled();
  });
  RNBluetoothClassic.onBluetoothEnabled(() => {
    setBluUnable(true);
  });
  return isBluUnable ? (
    isLoad ? (
      <FirstStep_app />
    ) : (
      <Text> App is loading </Text>
    )
  ) : (
    <AppLoading />
  );
};

export default App;

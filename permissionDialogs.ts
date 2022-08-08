import React from "react";
import { Permission, PermissionsAndroid, Platform } from "react-native";
import { check, PERMISSIONS, RESULTS, request } from "react-native-permissions";
import * as Notifications from "expo-notifications";

const permissionDialogs = {
  CAMERA: async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera",
          message: "IDK",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "dont ALLOW",
          buttonPositive: "ALLOW",
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("you can use BLUETOOTH_ADVERTISE");
      } else {
        console.log(granted, "ble_advers");
      }
    } catch (err) {
      console.log(err);
    }
  },
  BLUETOOTH_ADVERTISE: async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE,
        {
          title: "BLUETOOTH_ADVERTISE",
          message: "IDK",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "dont ALLOW",
          buttonPositive: "ALLOW",
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("you can use BLUETOOTH_ADVERTISE");
      } else {
        console.log(granted, "ble_advers");
      }
    } catch (err) {
      console.log(err);
    }
  },
  BLUETOOTH_CONNECT: async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        {
          title: "BLUETOOTH_CONNECT",
          message: "IDK",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "dont ALLOW",
          buttonPositive: "ALLOW",
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("you can use BLUETOOTH_CONNECT");
      } else {
        console.log(granted, "ble_connect");
      }
    } catch (err) {
      console.log(err);
    }
  },
  BLUETOOTH_SCAN: async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        {
          title: "BLUETOOTH_SCAN",
          message: "IDK",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "dont ALLOW",
          buttonPositive: "ALLOW",
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("you can use BLUETOOTH_SCAN");
      } else {
        console.log(granted, "ble_scan");
      }
    } catch (err) {
      console.log(err);
    }
  },
  ACCESS_FINE_LOCATION: async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "ACCESS_FINE_LOCATION",
          message: "IDK",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "dont ALLOW",
          buttonPositive: "ALLOW",
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("you can use ACCESS_FINE_LOCATION");
      } else {
        console.log(granted, "Fine_location");
      }
    } catch (err) {
      console.log(err);
    }
  },
  ALL: async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
      ]);
      console.log(granted);
    } catch (err) {
      console.log(err);
    }
  },
  PERMISSIONS_FOR_ALL: async () => {
    const permissions =
      Platform.OS === "ios"
        ? [PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL]
        : [
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.ANDROID.BLUETOOTH_ADVERTISE,
            PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
            PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
          ];
    permissions.map(async (permission) => {
      const timeout = await setTimeout(async () => {
        const askForPermission = await request(permission);

        const status = await check(permission);
        clearTimeout(timeout);
        // console.log(permission, status);

        // switch (status) {
        //   case RESULTS.UNAVAILABLE:
        //     console.log(
        //       permission,
        //       "This feature is not available (on this device / in this context)",
        //     );
        //     break;
        //   case RESULTS.DENIED:
        //     console.log(
        //       permission,
        //       "The permission has not been requested / is denied but requestable",
        //     );
        //     break;
        //   case RESULTS.LIMITED:
        //     console.log(
        //       permission,
        //       "The permission is limited: some actions are possible",
        //     );
        //     break;
        //   case RESULTS.GRANTED:
        //     console.log(permission, "The permission is granted");
        //     break;
        //   case RESULTS.BLOCKED:
        //     console.log(
        //       permission,
        //       "The permission is denied and not requestable anymore",
        //     );
        //     break;
        // }
      }, 1000);
    });
  },
  registerForPushNotificationsAsync: async () => {
   Notifications
  },
};

const getAllPermission = async () => {
  await permissionDialogs.BLUETOOTH_ADVERTISE();
  await permissionDialogs.ACCESS_FINE_LOCATION();
  await permissionDialogs.CAMERA();
  await permissionDialogs.registerForPushNotificationsAsync();
};

export default getAllPermission;

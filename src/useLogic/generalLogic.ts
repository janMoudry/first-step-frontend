import deviceInfoModule from "react-native-device-info";
import GetLocation from "react-native-get-location";
import appManager from "./apiCalls";
import BackgroundFetch from "react-native-background-fetch";

export const getAge = (birth: string): string => {
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

export const updatingLocation = async () => {
  // const phoneId = await deviceInfoModule.getAndroidId();
  // const currentLocation = await GetLocation.getCurrentPosition({
  //   timeout: 15000,
  //   enableHighAccuracy: true,
  // });
  // const update = await appManager.updateLocation({
  //   phoneId: phoneId,
  //   latitude: currentLocation.latitude,
  //   longitude: currentLocation.longitude,
  // });
  // setTimeout(updatingLocation, 10000);
};

export const handleAppStateChange = async (e) => {
  const phoneId = await deviceInfoModule.getAndroidId();

  const currentLocation = await GetLocation.getCurrentPosition({
    timeout: 15000,
    enableHighAccuracy: true,
  });

  const status = await BackgroundFetch.configure(
    { minimumFetchInterval: 15 },
    async (taskId) => {
      console.log(taskId, "taskId");

      switch (taskId) {
        case "updateLocation":
          const update = await appManager.updateLocation({
            phoneId: phoneId,
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          });

          console.log(update);
      }
    },
    async (taskId) => {
      BackgroundFetch.finish(taskId);
    },
  );

  BackgroundFetch.scheduleTask({
    taskId: "updateLocation",
    forceAlarmManager: true,
    delay: 10000,
    periodic: true,
  });
};

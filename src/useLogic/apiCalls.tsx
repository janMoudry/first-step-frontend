import { EditProfile } from "../Types/requestTypes";
import useApiCall from "./useApiCall";

const appManager = {
  fetchUserDataByPhoneId: async (phoneId: string) => {
    const url = `/singleProfile`;
    const reqParams = { phoneId: phoneId };
    const data = await useApiCall(url, reqParams);

    return !!data ? data : null;
  },
  allPhoneIds: async () => {
    const url = `/getPhoneIds`;
    const data = await useApiCall(url, null);

    return !!data ? data : null;
  },

  images: (): string => {
    return `http://192.168.0.139:3001/image`;
  },
  login: async (phoneId: string, email: string, password: string) => {
    const url = `/login`;
    const reqParams = {
      phoneId: phoneId,
      email: email,
      password: password,
    };
    const data = await useApiCall(url, reqParams);

    return !!data ? data : null;
  },
  updateLocation: async (locationData) => {
    const url = `/updateLocation`;
    const reqParams = locationData;
    const data = await useApiCall(url, reqParams);
    return data;
  },
  findDevicesInLocation: async (phoneId) => {
    const url = `/getPhoneInRadius`;
    const reqParams = {
      phoneId: phoneId,
    };
    const data = await useApiCall(url, reqParams);
    return data;
  },
  register: async (phoneId, email, password) => {
    const url = `/registration`;
    const reqParams = {
      phoneId: phoneId,
      email: email,
      password: password,
    };
    const data = await useApiCall(url, reqParams);

    return data;
  },
  editProfile: async (userData: {
    phoneId: string;
    name: string;
    midllename: string;
    surname: string;
    birth: string;
    description: string;
    hobbies: Array<string>;
  }) => {
    const url = `/editProfile`;
    const reqParams = userData;
    const data = await useApiCall(url, reqParams);

    return data;
  },
};

export default appManager;

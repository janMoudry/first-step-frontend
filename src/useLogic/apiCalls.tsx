import { EditProfile } from "../Types/requestTypes";
import { useApiPost, useApiGet } from "./useApiCall";

const appManager = {
  fetchUserDataByPhoneId: async (phoneId: string) => {
    const url = `/singleProfile`;
    const reqParams = { phoneId: phoneId };
    const data = await useApiGet(url, reqParams);

    return !!data ? data : null;
  },

  images: async (phoneId) => {
    const url = `/getImage`;
    const reqParams = { phoneId: phoneId };

    const data = await useApiGet(url, reqParams);

    return data;
  },
  login: async (phoneId: string, email: string, password: string) => {
    const url = `/login`;
    const reqParams = {
      phoneId: phoneId,
      email: email,
      password: password,
    };
    const data = await useApiGet(url, reqParams);

    return !!data ? data : null;
  },
  updateLocation: async (locationData) => {
    const url = `/updateLocation`;
    const reqParams = locationData;
    const data = await useApiGet(url, reqParams);
    return data;
  },
  findDevicesInLocation: async (phoneId) => {
    const url = `/getPhoneInRadius`;
    const reqParams = {
      phoneId: phoneId,
    };
    const data = await useApiGet(url, reqParams);
    return data;
  },
  register: async (phoneId, email, password) => {
    const url = `/registration`;
    const reqParams = {
      phoneId: phoneId,
      email: email,
      password: password,
    };
    const data = await useApiGet(url, reqParams);

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
    const data = await useApiGet(url, reqParams);

    return data;
  },
  saveImage: async (imageData, phoneId) => {
    const url = `/saveImage/${phoneId}`;
    const reqParams = imageData;

    const data = await useApiPost(url, reqParams);

    return data;
  },
};

export default appManager;

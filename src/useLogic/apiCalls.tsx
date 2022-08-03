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
    try {
      return `http://192.168.1.75:3001/image`;
    } catch (err) {
      console.log(err);
    }
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
  updateLocation: async (phoneId, latitude, longitude) => {
    const url = `/updateLocation`;
    const reqParams = {
      phoneId: phoneId,
      latitude: latitude,
      longitude: longitude,
    };
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
};

export default appManager;

import axios from "axios";

export const useApiGet = async (url: string, data: Object) => {
  // let fullUrl = `http://192.168.0.139:3001${url}`;
  let fullUrl = `http://10.0.0.58:3001${url}`;

  console.log(fullUrl);

  try {
    const fetchedData = await axios.get(fullUrl, {
      params: data,
    });

    return fetchedData.data;
  } catch (err) {
    console.log(err);
  }
};

export const useApiPost = async (url: string, data: Object) => {
  // let fullUrl = `http://192.168.0.139:3001${url}`;
  let fullUrl = `http://10.0.0.58:3001${url}`;

  try {
    const fetchedData = await fetch(fullUrl, {
      method: "POST",
      body: data,
    });
    console.log(fetchedData.data);

    return fetchedData.data;
  } catch (err) {
    console.log(err);
  }
};

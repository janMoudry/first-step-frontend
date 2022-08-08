import axios from "axios";

const useApiCall = async (url: string, data: Object) => {
  let fullUrl = `http://192.168.0.139:3001${url}`;
  // let fullUrl = `http://10.0.0.34:3001${url}`;
  console.log(fullUrl);

  try {
    const fetchedData = await axios.get(fullUrl, { params: data });

    return fetchedData.data;
  } catch (err) {
    console.log(err);
  }
};

export default useApiCall;

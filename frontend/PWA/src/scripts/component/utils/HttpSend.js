import axios, { AxiosError } from "axios";
import CONFIG from "../../../globals/config";
import toast from "./toast";

const HttpSend = async ({ path, method, data }) => {
  let config = {
    baseURL: CONFIG.BASE_URL,
    url: path,
    method: method || "POST",
  };

  let err, entry;

  if (data) {
    config.data = data;
  }
  try {
    const res = await axios.request(config);

    return Promise.resolve(res?.data.data);
  } catch (err) {
    // toast(err?.response?.data?.message);
    return Promise.reject(err?.response?.data?.message);
  }
};

export default HttpSend;

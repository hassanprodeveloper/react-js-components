import axios from "axios";
import config from "../config";

export const Api = axios.create({
  baseURL: config.baseUrl,
  timeout: 100000,
});

export function* post(e) {
  const { label, data, header } = e.payload;

  const response = yield Api.post(label, data)
    .then((response) => {
      return response;
    })
    .catch((error) => error);
   return response;
}

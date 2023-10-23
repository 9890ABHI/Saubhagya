import axios from "axios";
import { useSelector } from "react-redux";

export const baseURL = "";
let headers = {};
const axiosIns = axios.create({
  baseURL: "",
  headers,
});

axiosIns.interceptors.request.use(
  async (config) => {
    const access = localStorage.getItem("Xtoken");
    if (access) {
      config.headers.Authorization = `Token ${access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosIns.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    if (error.response.status === 401) {
      console.log("401");
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default axiosIns;

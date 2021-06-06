import axios from "axios";
export const server = axios.create({
//@ts-ignore
  baseURL: window._env_["SERVER_HOST"],
});

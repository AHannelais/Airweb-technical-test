import axios from "axios";
//@ts-ignore
console.log(window._env_)
export const server = axios.create({
//@ts-ignore
  baseURL: "http://localhost:3000",
});

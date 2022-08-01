import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.carpemundi.com.br/api",
});

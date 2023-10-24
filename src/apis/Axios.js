import axios from "axios";

const instance = axios.create({
  baseURL: "http://103.116.168.146/api/",
  //baseURL: 'http://192.168.100.20:3000/api/',
  //baseURL: "http://192.168.1.6:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

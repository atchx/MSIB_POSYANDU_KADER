import axios from "./Axios";

export const userLogin = async (phone) => {
  let data = {
    phone: phone,
  };
  const res = await axios.post("/auth/login", data);
  return res;
};

export const userVerify = async (phone, code) => {
  let data = {
    phone: phone,
    code: code,
  };
  const res = await axios.post("/auth/verify", data);
  return res;
};

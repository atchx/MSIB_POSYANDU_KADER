import axios from "./Axios";

export const setCheckup = async (token, data) => {
  const res = await axios
    .post("/kader/checkup", data, {
      headers: { Authorization: "Bearer " + token },
    })
    .catch((error) => console.log(error));
  return res;
};

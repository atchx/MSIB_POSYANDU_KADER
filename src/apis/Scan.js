import axios from "./Axios";

export const getScan = async (token, id) => {
  const res = await axios
    .get(`/kader/scan/${id}`, {
      headers: { Authorization: "Bearer " + token },
    })
    .catch((error) => console.log(error));
  return res;
};

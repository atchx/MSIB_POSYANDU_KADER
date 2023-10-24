import axios from "./Axios";

export const getMaster = async (token) => {
  const res = await axios
    .get("/kader/master", {
      headers: { Authorization: "Bearer " + token },
    })
    .catch((error) => console.log(error));
  return res;
};

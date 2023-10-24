import axios from "./Axios";

export const getChildren = async (token) => {
  const res = await axios
    .get("/kader/children", {
      headers: { Authorization: "Bearer " + token },
    })
    .catch((error) => console.log(error));
  return res;
};

export const getDataChildren = async (token, id) => {
  const res = await axios
    .get(`/kader/children/${id}`, {
      headers: { Authorization: "Bearer " + token },
    })
    .catch((error) => console.log(error));
  return res;
};

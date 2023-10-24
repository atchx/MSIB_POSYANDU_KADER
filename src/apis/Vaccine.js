import axios from "./Axios";

export const getVaccine = async (token) => {
  const res = await axios
    .get("/kader/vaccine", {
      headers: { Authorization: "Bearer " + token },
    })
    .catch((error) => console.log(error));
  return res;
};

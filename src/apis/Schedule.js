import axios from "./Axios";

export const getSchedule = async (token) => {
  const res = await axios
    .get("/kader/schedule", {
      headers: { Authorization: "Bearer " + token },
    })
    .catch((error) => console.log(error));
  return res;
};

export const setSchedule = async (token, data) => {
  const res = await axios
    .post(
      "/kader/schedule/create",
      { schedule: data },
      {
        headers: { Authorization: "Bearer " + token },
      }
    )
    .catch((error) => console.log(error));
  return res;
};

export const updateSchedule = async (token, data) => {
  const res = await axios
    .post("/kader/schedule/update", data, {
      headers: { Authorization: "Bearer " + token },
    })
    .catch((error) => console.log(error));
  return res;
};

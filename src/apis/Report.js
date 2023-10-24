import axios from "./Axios";

export const setImageReport = async (token) => {
  const res = await axios
    .post("/kader/report/upload", {
      headers: { Authorization: "Bearer " + token },
      "Content-Type": "multipart/form-data",
    })
    .catch((error) => console.log(error));
  return res;
};

export const setReport = async (token, data) => {
  const res = await axios
    .post("/kader/report/create", data, {
      headers: { Authorization: "Bearer " + token },
    })
    .catch((error) => console.log(error));
  return res;
};

export const getReport = async (token) => {
  const res = await axios
    .get("/kader/report", {
      headers: { Authorization: "Bearer " + token },
    })
    .catch((error) => console.log(error));
  return res;
};

export const deleteReport = async (token, id) => {
  const res = await axios
    .get(`/kader/report/delete/${id}`, {
      headers: { Authorization: "Bearer " + token },
    })
    .catch((error) => console.log(error));
  return res;
};

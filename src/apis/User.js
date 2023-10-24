import axios from "./Axios";

// export const getUser = async (token) => {
//   let data = {
//     phone: phone,
//   };
//   const res = await axios.get("/auth/login",(
//     header
//   ));
//   return res;
// };

export const getUser = async (token) => {
  const res = await axios
    .get("/kader/me", {
      headers: { Authorization: "Bearer " + token },
    })
    .catch((error) => console.log(error));
  return res;
};

export const updateUser = async (token, data) => {
  const res = await axios
    .post("/kader/me/update", data, {
      headers: { Authorization: "Bearer " + token },
    })
    .catch((error) => console.log(error));
  return res;
};

export const setImage = async (token, data) => {
  const res = await axios
    .post("/kader/me/set-image", data, {
      headers: { Authorization: "Bearer " + token },
    })
    .catch((error) => console.log(error));
  return res;
};

import processServerResponse from "./processServerResponse";

export const baseUrl = "http://localhost:3001";

export const getClothingItem = () => {
  return fetch(`${baseUrl}/items`).then(processServerResponse);
};

export const addNewItem = ({ name, imageUrl, weather }) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then((res) => processServerResponse(res));
};

export const deleteItem = (id) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => processServerResponse(res));
};

export const profileUpdate = (name, avatar) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      avatar,
    }),
  }).then(processServerResponse);
};

export const addCardLike = (id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};

export const removeCardLike = (id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};

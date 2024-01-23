import { baseUrl } from "../utils/api";
import processServerResponse from "./processServerResponse";

export const registration = (email, password, name, avatar) => {
  return fetch("${baseUrl}/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }),
  })
    .then(processServerResponse)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const authorize = (email, password) => {
  return fetch("${baseUrl}/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(processServerResponse)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

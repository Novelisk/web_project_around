const config = {
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "28b7690c-9f2e-44f9-b1b8-d3a0a018562f",
    "Content-Type": "application/json",
  },
};

const checkRes = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

// Get user's profile info
export const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "GET",
    headers: config.headers,
  }).then(checkRes);
};

// Update user's profile info
export const updateUserInfo = ({ name, about }) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ name, about }),
  }).then(checkRes);
};

// Get initial cards
export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "GET",
    headers: config.headers,
  }).then(checkRes);
};

// Add new card
export const addNewCard = ({ name, link }) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({ name, link }),
  }).then(checkRes);
};

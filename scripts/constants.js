export const editButton = document.querySelector(".profile__edit-btn");
export const popupSubmitButton = document.querySelector(".popup__submit-btn");
export const popupOverlay = document.querySelector(".popup__overlay");
export const inputName = document.querySelector(".popup__input_type_name");
export const inputAbout = document.querySelector(".popup__input_type_about");
export const profileName = document.querySelector(".profile__name");
export const profileAbout = document.querySelector(".profile__about");
export const closeButton = document.querySelector(".popup__close-tab");
export const popupName = document.querySelector("#popupName");
export const popupAbout = document.querySelector("#popupAbout");
export const addButton = document.querySelector(".profile__add-btn");
export const addCloseTab = document.querySelector("#addCloseTab");
export const popupImageCloseTab = document.querySelector("#popupImageCloseTab");
export const popupImageImg = document.querySelector(".popup__image-img");
export const popupImageTitle = document.querySelector(".popup__image-title");
export const popupImage = document.querySelector(".popup__image");
export const addCreateBtn = document.querySelector("#addCreateBtn");
export const addPopup = document.querySelector("#addPopup");
export const profilePopup = document.querySelector("#profilePopup");
export const editProfileBtn = document.querySelector("#profileCreateBtn");
export const cardContainer = document.querySelector(".elements");
export const addName = document.querySelector("#addName");
export const addLink = document.querySelector("#addLink");
export const popupContainer = document.querySelector(".popup");
export const profileForm = document.querySelector(
  "#profilePopup .popup__container"
);
export const addForm = document.querySelector("#addPopup .popup__container");
// export const initialCards = [
//   {
//     name: "Valle de Yosemite",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
//   },
//   {
//     name: "Lago Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
//   },
//   {
//     name: "Montañas Calvas",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
//   },
//   {
//     name: "Parque Nacional de la Vanoise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
//   },
// ];

// export const initialCards = fetch(
//   "https://around-api.es.tripleten-services.com/v1/cards/",
//   {
//     method: "GET",
//     headers: {
//       authorization: "28b7690c-9f2e-44f9-b1b8-d3a0a018562f",
//     },
//   }
// )
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`Error: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => {
//     return data.map((card) => ({
//       name: card.name,
//       link: card.link,
//     }));
//   })
//   .catch((err) => {
//     console.log(`Error ${err} requesting cards`);
//     return [];
//   });

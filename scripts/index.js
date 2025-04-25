const editButton = document.querySelector(".profile__edit-btn");
const popupButton = document.querySelector(".popup__submit-btn");
const popup = document.querySelector(".popup");
const inputName = document.querySelector(".popup__input_type_name");
const inputAbout = document.querySelector(".popup__input_type_about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const closeButton = document.querySelector(".popup__close-tab");
const submitButton = document.querySelector(".popup__submit-btn");
const popupName = document.querySelector("#popupName");
const popupAbout = document.querySelector("#popupAbout");
const popupUnderline = document.querySelector(".popup__underline");
const errorLocation = document.querySelector("#popupName", "#popupAbout");
const likeButton = document.querySelectorAll(".element__like-btn");
const addButton = document.querySelector(".profile__add-btn");
const addPopup = document.querySelector("#addPopup");
const addName = document.querySelector("#addName");
const addLink = document.querySelector("#addLink");
const addCloseTab = document.querySelector("#addCloseTab");
const addCreateBtn = document.querySelector("#addCreateBtn");
const templateElementPanel = document.querySelector("#element__template");
const popupImageCloseTab = document.querySelector("#popupImageCloseTab");
const popupImage = document.querySelector(".popup__image");
const popupImageImg = document.querySelector(".popup__image-img");
const clickOnImage = document.querySelectorAll(".element__image");
const trashButton = document.querySelectorAll(".element__trash-btn");
const cardContainer = document.querySelector(".elements");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// Edit profile button
editButton.addEventListener("click", () => {
  popup.classList.remove("popup_visible");
  popupName.value = profileName.textContent;
  popupAbout.value = profileAbout.textContent;
});

// Add card button
addButton.addEventListener("click", () => {
  addPopup.classList.remove("popup_visible");
});

// Submit profile info
popupButton.addEventListener("click", (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.classList.add("popup_visible");
});

// Show invalid/error mesagge
/*const showErrorMessage = (errorMessage, errorMessageLocation) => {
  errorMessageLocation.classList.add("popup__underline_invalid");
  errorMessageLocation.textContent = errorMessage;
};

const removeErrorMessage = (errorMessageLocation) => {
  errorMessageLocation.classList.remove("popup__underline_invalid");
  errorMessageLocation.textContent = "";
};

const checkInputValidity = (
  inputElementLocation,
  errorMessage,
  errorMessageLocation
) => {
  if (!inputElementLocation.validity.valid) {
    showErrorMessage(errorMessage, errorMessageLocation);
  } else {
    removeErrorMessage(errorMessageLocation);
  }
}; */

/*const handleErrorMessage = (
  inputElementLocation,
  errorMessage,
  errorMessageLocation
) => {
  if (!inputElementLocation.validity.valid) {
    errorMessageLocation.classList.add("popup__underline_invalid");
    errorMessageLocation.textContent = errorMessage;
  } else {
    errorMessageLocation.classList.remove("popup__underline_invalid");
    errorMessageLocation.textContent = "";
  }
};*/

// handleErrorMessage(popupName, popupName.validationMessage, popupUnderline);
// handleErrorMessage(popupAbout, popupAbout.validationMessage, popupUnderline);

// Close profile popup
closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.toggle("popup_visible");
});

// Close add card popup
addCloseTab.addEventListener("click", (e) => {
  e.preventDefault();
  addPopup.classList.toggle("popup_visible");
});

// Close image popup
popupImageCloseTab.addEventListener("click", (e) => {
  e.preventDefault();
  popupImage.classList.add("popup_visible");
});

// Create card function
function createCard(name, link) {
  const cardElement = templateElementPanel.content
    .querySelector(".element")
    .cloneNode(true);

  const cardImage = cardElement.querySelector(".element__image");
  const cardTitle = cardElement.querySelector(".element__text");
  const trashButton = cardElement.querySelector(".element__trash-btn");
  const likeButton = cardElement.querySelector(".element__like-btn");

  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;

  // Image click-on to show up
  cardImage.addEventListener("click", (e) => {
    const popupImageTitle = popupImage.querySelector(".popup__image-title");
    e.preventDefault();
    popupImageImg.src = cardImage.src;
    popupImageImg.alt = cardImage.alt;
    popupImageTitle.textContent = cardTitle.textContent;
    popupImage.classList.remove("popup_visible");
  });

  trashButton.addEventListener("click", (e) => {
    e.preventDefault();
    cardElement.remove();
  });

  likeButton.addEventListener("click", (e) => {
    e.preventDefault();
    likeButton.classList.toggle("element__like-btn_black");
  });

  return cardElement;
}

// Add card function
function addCard(cardElement) {
  const cardContainer = document.querySelector(".elements");
  cardContainer.prepend(cardElement);
}

// Add new card
addCreateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const title = addName.value;
  const link = addLink.value;
  addName.value = "";
  addLink.value = "";
  addPopup.classList.toggle("popup_visible");

  const newCard = createCard(title, link);
  addCard(newCard);
});

// Load initial cards
initialCards.forEach((card) => {
  const cardElement = createCard(card.name, card.link);
  addCard(cardElement);
});

// Reset validation
import { resetValidation } from "./validate.js";

resetValidation();

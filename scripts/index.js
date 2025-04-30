const editButton = document.querySelector(".profile__edit-btn");
const popupButton = document.querySelector(".popup__submit-btn");
const popup = document.querySelector(".popup");
const inputName = document.querySelector(".popup__input_type_name");
const inputAbout = document.querySelector(".popup__input_type_about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const closeButton = document.querySelector(".popup__close-tab");
const popupName = document.querySelector("#popupName");
const popupAbout = document.querySelector("#popupAbout");
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

// Close popups with escape key
document.addEventListener("keydown", (evt) => {
  const allPopups = document.querySelectorAll(".popup");
  if (evt.key === "Escape") {
    allPopups.forEach((popup) => {
      if (!popup.classList.contains("popup_visible")) {
        popup.classList.add("popup_visible");
      }
    });
  }
});

// Close popups with click anywhere on window
document.addEventListener("click", (evt) => {
  const page = document.querySelector(".page");
  const allPopups = document.querySelectorAll(".popup");
  if (evt.target === page) {
    allPopups.forEach((popup) => {
      popup.classList.add("popup_visible");
    });
  }
});

// Submit for with "enter" key
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("popup__container");
  forms.forEach((form) => {
    form.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter" && resetValidation()) {
        evt.preventDefault();
        form.submit();
      }
    });
  });
});

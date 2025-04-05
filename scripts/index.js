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
const popupImageContainer = document.querySelector(
  ".popup__image.popup__image-img"
);
const clickOnImage = document.querySelector(".element__image");
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

editButton.addEventListener("click", () => {
  popup.classList.remove("popup_visible");
  popupName.value = profileName.textContent;
  popupAbout.value = profileAbout.textContent;
});

addButton.addEventListener("click", () => {
  addPopup.classList.remove("popup_visible");
});

popupButton.addEventListener("click", (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.classList.add("popup_visible");
});

function submitButtonBlack() {
  if (inputName.value === "" && inputAbout.value === "") {
    submitButton.classList.remove("popup__submit-btn_black");
  } else {
    submitButton.classList.add("popup__submit-btn_black");
  }
}

inputName.addEventListener("input", submitButtonBlack);
inputAbout.addEventListener("input", submitButtonBlack);

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.toggle("popup_visible");
});

addCloseTab.addEventListener("click", (e) => {
  e.preventDefault();
  addPopup.classList.toggle("popup_visible");
});

// clickOnImage.addEventListener("click", (e) => {
//   e.preventDefault();
//   popupImageContainer.src = e.target.src;
//   popupImageContainer.alt = e.target.alt;
//   popupImage.classList.toggle("popup_visible");
// });

popupImageCloseTab.addEventListener("click", (e) => {
  e.preventDefault();
  popupImage.classList.toggle("popup_visible");
});

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

function addCard(cardElement) {
  const cardContainer = document.querySelector(".elements");
  cardContainer.prepend(cardElement);
}

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

initialCards.forEach((card) => {
  const cardElement = createCard(card.name, card.link);
  addCard(cardElement);
});

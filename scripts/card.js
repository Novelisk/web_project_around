const popupImage = document.querySelector(".popup__image");
const popupOverlay = document.querySelector(".popup__overlay");
const popupImageImg = document.querySelector(".popup__image-img");
const popupImageTitle = document.querySelector(".popup__image-title");
const templateContainer = document.querySelector(".elements");
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

class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._src = data.link;
    this._alt = data.name;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _handleImagePopup() {
    popupImageImg.src = this._src;
    popupImageImg.alt = this._alt;
    popupImageTitle.textContent = this._title;
    popupImage.classList.remove("popup_visible");
    popupOverlay.classList.remove("popup_visible");
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__trash-btn")
      .addEventListener("click", () => {
        this._element.remove();
      });

    this._element
      .querySelector(".element__like-btn")
      .addEventListener("click", (e) => {
        e.target.classList.toggle("element__like-btn_black");
      });

    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleImagePopup();
      });
  }

  generateCard() {
    this._element = this._getTemplate();
    const imageElement = this._element.querySelector(".element__image");
    const titleElement = this._element.querySelector(".element__text");
    imageElement.src = this._src;
    imageElement.alt = this._alt;
    titleElement.textContent = this._title;

    this._setEventListeners();

    return this._element;
  }
}

const renderElements = () => {
  templateContainer.innerHTML = "";
  initialCards.forEach((item) => {
    const card = new Card(item, "#element__template");
    const cardElement = card.generateCard();
    templateContainer.append(cardElement);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderElements();
});

export default Card;

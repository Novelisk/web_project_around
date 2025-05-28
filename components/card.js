export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._title = data.name;
    this._src = data.link;
    this._alt = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
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
        this._handleCardClick({
          src: this._src,
          alt: this._alt,
          title: this._title,
        });
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

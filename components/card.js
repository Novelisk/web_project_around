export default class Card {
  constructor(data, cardSelector, handleCardClick, deletePopup, userId, api) {
    this._title = data.name;
    this._src = data.link;
    this._alt = data.name;
    this._id = data._id;
    this._likes = data.likes;
    this._isLiked = data.isLiked || false;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._deletePopup = deletePopup;
    this._api = api;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__trash-btn")
      .addEventListener("click", () => {
        this._deletePopup.open(() => {
          this._api
            .deleteCard(this._id)
            .then(() => {
              this._element.remove();
              this._deletePopup.close();
            })
            .catch((err) => {
              console.log(`Error ${err} al eliminar la tarjeta del servidor`);
            });
        });
      });

    this._element
      .querySelector(".element__like-btn")
      .addEventListener("click", () => {
        if (this._isLiked) {
          this._api
            .unlikeCard(this._id)
            .then((updateCard) => {
              this._isLiked = false;
              this._element
                .querySelector(".element__like-btn")
                .classList.remove("element__like-btn_black");
              this._likes = updateCard.likes;
            })
            .catch((err) => {
              console.log(`Error ${err} al tratar de eliminar like`);
            });
        } else {
          this._api
            .likeCard(this._id)
            .then((updateCard) => {
              this._isLiked = true;
              this._element
                .querySelector(".element__like-btn")
                .classList.add("element__like-btn_black");
              this._likes = updateCard.likes;
            })
            .catch((err) => {
              console.log(`Error ${err} al dar like`);
            });
        }
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

    if (this._isLiked) {
      this._element
        .querySelector(".element__like-btn")
        .classList.add("element__like-btn_black");
    }

    this._setEventListeners();

    return this._element;
  }
}

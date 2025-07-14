import { popupOverlay } from "../scripts/constants.js";

export default class PopupWithConfirm {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector("form");
    this._submitButton = this._form.querySelector("button[type='submit']");
    this._handleSubmit = null;

    this._popup
      .querySelector(".popup__close-tab")
      .addEventListener("click", () => this.close());

    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this._handleSubmit) {
        this._handleSubmit();
      }
    });
  }

  open(handleSubmit) {
    this._handleSubmit = handleSubmit;
    this._popup.classList.remove("popup_visible");
    popupOverlay.classList.remove("popup_visible");
  }

  close() {
    this._popup.classList.add("popup_visible");
    popupOverlay.classList.add("popup_visible");
    this._handleSubmit = null;
  }
}

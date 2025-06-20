import { popupOverlay } from "../scripts/constants.js";

export default class Popup {
  constructor(popupElement) {
    this._popup = popupElement;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.remove("popup_visible");
    popupOverlay.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.add("popup_visible");
    popupOverlay.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscClose);
  }

  // open() {
  //   this._popup.classList.remove("popup_visible");
  //   popupOverlay.classList.remove("popup_visible");
  //   document.removeEventListener("keydown", this._handleEscClose);
  // }

  // close() {
  //   this._popup.classList.add("popup_visible");
  //   popupOverlay.classList.add("popup_visible");
  //   document.addEventListener("keydown", this._handleEscClose);
  // }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup
      .querySelector(".popup__close-tab")
      ?.addEventListener("click", () => this.close());

    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target === this._popup) {
        this.close();
      }
    });
  }
}

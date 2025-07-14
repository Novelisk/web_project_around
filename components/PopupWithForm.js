import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSelector, formSubmit) {
    super(document.querySelector(popupSelector));
    this._form = this._popup.querySelector(formSelector);
    this._formSubmit = formSubmit;
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._submitButton = this._form.querySelector("button[type='submit']");
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputValues = this._getInputValues();
      this._formSubmit(inputValues);
    });
  }

  renderLoading(isLoading, loadingText = "Guardando...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  close() {
    super.close();
    this._form.reset();
    this.renderLoading(false);
  }
}

import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSelector, formSubmit) {
    super(document.querySelector(popupSelector));
    this._form = this._popup.querySelector(formSelector);
    this._formSubmit = formSubmit;
    this._inputList = this._form.querySelectorAll(".popup__input");
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

  close() {
    super.close();
    this._form.reset();
  }
}

export default class FormValidator {
  constructor(formElement) {
    this._form = formElement;
    this._fields = this._form.querySelectorAll(".popup__field");
    this._submitButton = this._form.querySelector(".popup__submit-btn");
  }

  _showError(input, errorElement, underline) {
    underline.classList.add("popup__underline_invalid");
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add("popup__error_active");
  }

  _hideError(errorElement, underline) {
    underline.classList.remove("popup__underline_invalid");
    errorElement.textContent = "";
    errorElement.classList.remove("popup__error_active");
  }

  _checkInputValidity(input, errorElement, underline) {
    if (!input.validity.valid) {
      this._showError(input, errorElement, underline);
    } else {
      this._hideError(errorElement, underline);
    }
  }

  _toggleButtonState() {
    const isFormValid = Array.from(this._fields).every((field) => {
      const input = field.querySelector(".popup__input");
      return input.validity.valid;
    });

    if (isFormValid) {
      this._submitButton.classList.remove("popup__submit-btn_invalid");
      this._submitButton.removeAttribute("disabled");
    } else {
      this._submitButton.classList.add("popup__submit-btn_invalid");
      this._submitButton.setAttribute("disabled", true);
    }
  }

  _setEventListeners() {
    this._fields.forEach((field) => {
      const input = field.querySelector(".popup__input");
      const errorElement = field.querySelector(`#${input.id}-error`);
      const underline = field.querySelector(".popup__underline");

      input.addEventListener("input", () => {
        this._checkInputValidity(input, errorElement, underline);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
    this._toggleButtonState();
  }
}

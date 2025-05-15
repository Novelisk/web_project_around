class FormValidator {
  constructor(formSelector) {
    this.popupForms = document.querySelector(formSelector);
  }

  enableValidation() {
    const popupContainer =
      this.popupForms.querySelectorAll(".popup__container");

    popupContainer.forEach((container) => {
      const popupLabels = container.querySelectorAll(".popup__field");
      const submitButton = container.querySelector(".popup__submit-btn");

      popupLabels.forEach((label) => {
        const popupInput = label.querySelector(".popup__input");
        const popupError = label.querySelector(`#${popupInput.id}-error`);
        const popupErrorUnderline = label.querySelector(".popup__underline");

        popupInput.addEventListener("input", () => {
          const errorMessage = popupInput.validationMessage;

          const notValid = () => {
            popupErrorUnderline.classList.add("popup__underline_invalid");
            popupError.classList.add("popup__error_active");
            popupError.textContent = errorMessage;
          };

          const isValid = () => {
            popupErrorUnderline.classList.remove("popup__underline_invalid");
            popupError.classList.remove("popup__error_active");
            popupError.textContent = "";
          };

          if (!popupInput.validity.valid) {
            notValid();
          } else {
            isValid();
          }

          const allValid = Array.from(popupLabels).every((item) => {
            const input = item.querySelector(".popup__input");
            return input.validity.valid;
          });

          if (allValid) {
            submitButton.classList.remove("popup__submit-btn_invalid");
            submitButton.removeAttribute("disabled");
          } else {
            submitButton.classList.add("popup__submit-btn_invalid");
            submitButton.setAttribute("disabled", true);
          }
        });
      });
    });
  }
}

export default FormValidator;

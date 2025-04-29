const resetValidation = () => {
  const popupForms = document.querySelectorAll(".popup__container");
  popupForms.forEach((popupForm) => {
    const popupLabels = popupForm.querySelectorAll(".popup__field");
    const submitButton = popupForm.querySelector(".popup__submit-btn");

    submitButton.classList.add("popup__submit-bnt_invalid");
    submitButton.setAttribute("disabled", true);

    popupLabels.forEach((popupLabel) => {
      const popupInput = popupLabel.querySelector(".popup__input");
      const popupErrorUnderline = popupLabel.querySelector(".popup__underline");
      const popupError = popupLabel.querySelector(`#${popupInput.id}-error`);

      popupInput.addEventListener("input", () => {
        const errorMessage = popupInput.validationMessage;

        if (!popupInput.validity.valid) {
          popupErrorUnderline.classList.add("popup__underline_invalid");
          popupError.classList.add("popup__error_active");
          popupError.textContent = errorMessage;
        } else {
          popupErrorUnderline.classList.remove("popup__underline_invalid");
          popupError.classList.remove("popup__error_active");
          popupInput.textContent = "";
        }

        const allValid = Array.from(popupLabels).every((label) => {
          const input = label.querySelector(".popup__input");
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
};

export { resetValidation };

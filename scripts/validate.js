const resetValidation = () => {
  const popupForms = document.querySelectorAll(".popup__container");
  popupForms.forEach((popupForm) => {
    const popupLabels = popupForm.querySelectorAll(".popup__field");
    popupLabels.forEach((popupLabel) => {
      const popupInput = popupLabel.querySelector(".popup__input");
      const popupErrorUnderline = popupLabel.querySelector(".popup__underline");
      const popupError = popupLabel.querySelector(".popup__error");
      popupInput.addEventListener("input", () => {
        let minLength = popupInput.minLength;
        let maxLength = popupInput.maxLength;
        const errorMessage = popupInput.validationMessage;

        if (
          popupInput.value.length <= minLength ||
          popupInput.value.length >= maxLength
        ) {
          popupErrorUnderline.classList.add("popup__underline_invalid");
          popupError.classList.add("popup__error_active");
          popupError.textContent = errorMessage;
        } else {
          popupErrorUnderline.classList.remove("popup__underline_invalid");
          popupError.classList.remove("popup__error_active");
          popupInput.textContent = "";
        }
      });
    });
  });
};

export { resetValidation };

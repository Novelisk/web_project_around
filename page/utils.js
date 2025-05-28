import {
  editButton,
  popupSubmitButton,
  popupOverlay,
  inputName,
  inputAbout,
  profileName,
  profileAbout,
  closeButton,
  popupName,
  popupAbout,
  addButton,
  addCloseTab,
  popupImageCloseTab,
  popupImage,
  addCreateBtn,
  addPopup,
  profilePopup,
} from "../scripts/constants.js";

const eventListeners = () => {
  // Edit profile button
  editButton.addEventListener("click", () => {
    profilePopup.classList.remove("popup_visible");
    popupOverlay.classList.remove("popup_visible");
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
  });

  // Add card button
  addButton.addEventListener("click", () => {
    addPopup.classList.remove("popup_visible");
    popupOverlay.classList.remove("popup_visible");
  });

  // Submit profile info
  popupSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    profilePopup.classList.add("popup_visible");
    popupOverlay.classList.add("popup_visible");
  });

  // Close profile popup
  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    profilePopup.classList.add("popup_visible");
    popupOverlay.classList.add("popup_visible");
  });

  // Close add card popup
  addCloseTab.addEventListener("click", (e) => {
    e.preventDefault();
    addPopup.classList.toggle("popup_visible");
    popupOverlay.classList.toggle("popup_visible");
  });

  // Close image popup
  popupImageCloseTab.addEventListener("click", (e) => {
    e.preventDefault();
    popupImage.classList.add("popup_visible");
    popupOverlay.classList.add("popup_visible");
  });

  // Close popups with escape key
  document.addEventListener("keydown", (evt) => {
    const allPopups = document.querySelectorAll(".popup, .popup__image");
    if (evt.key === "Escape") {
      allPopups.forEach((popup) => {
        if (
          !popup.classList.contains("popup_visible") &&
          !popupOverlay.classList.contains("popup_visible")
        ) {
          popup.classList.add("popup_visible");
          popupOverlay.classList.add("popup_visible");
        }
      });
    }
  });

  // Close popups with click anywhere on window
  document.addEventListener("click", (evt) => {
    const allPopups = document.querySelectorAll(".popup, .popup__image");
    if (evt.target === popupOverlay) {
      allPopups.forEach((popup) => {
        popup.classList.add("popup_visible");
        popupOverlay.classList.add("popup_visible");
      });
    }
  });

  // Submit form with "enter" key
  const forms = document.querySelectorAll("#addPopup .popup__container");
  forms.forEach((form) => {
    form.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter") {
        evt.preventDefault();
        if (form.checkValidity()) {
          addCreateBtn.click();
        }
      }
    });
  });
};

export default eventListeners;

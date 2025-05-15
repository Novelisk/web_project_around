const editButton = document.querySelector(".profile__edit-btn");
const popupButton = document.querySelector(".popup__submit-btn");
const popup = document.querySelector(".popup");
const popupOverlay = document.querySelector(".popup__overlay");
const inputName = document.querySelector(".popup__input_type_name");
const inputAbout = document.querySelector(".popup__input_type_about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const closeButton = document.querySelector(".popup__close-tab");
const popupName = document.querySelector("#popupName");
const popupAbout = document.querySelector("#popupAbout");
const addButton = document.querySelector(".profile__add-btn");
const addCloseTab = document.querySelector("#addCloseTab");
const popupImageCloseTab = document.querySelector("#popupImageCloseTab");
const popupImage = document.querySelector(".popup__image");
const addCreateBtn = document.querySelector("#addCreateBtn");
const addPopup = document.querySelector("#addPopup");

function eventListeners() {
  // Edit profile button
  editButton.addEventListener("click", () => {
    popup.classList.remove("popup_visible");
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
  popupButton.addEventListener("click", (e) => {
    e.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    popup.classList.add("popup_visible");
    popupOverlay.classList.add("popup_visible");
  });

  // Close profile popup
  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.add("popup_visible");
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
}

export default eventListeners;

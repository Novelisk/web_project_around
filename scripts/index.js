// Generate Cards
import DefaultCard from "./card.js";
const cardContainer = document.querySelector(".elements");
const addCreateBtn = document.querySelector("#addCreateBtn");
const addPopup = document.querySelector("#addPopup");
const addName = document.querySelector("#addName");
const addLink = document.querySelector("#addLink");

// Add card to container function
function addCard(cardElement) {
  cardContainer.prepend(cardElement);
}

// Add new card function
function addNewCard() {
  addCreateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const newCardData = {
      name: addName.value,
      link: addLink.value,
    };

    const newCard = new DefaultCard(newCardData, "#element__template");
    const cardElement = newCard.generateCard();
    addCard(cardElement);

    addName.value = "";
    addLink.value = "";

    const popupOverlay = document.querySelector(".popup__overlay");
    addPopup.classList.add("popup_visible");
    popupOverlay.classList.add("popup_visible");
  });
}
addNewCard();

// Form validation
import FormValidator from "./formValidator.js";

const form1 = new FormValidator("#profilePopup");
const form2 = new FormValidator("#addPopup");
form1.enableValidation();
form2.enableValidation();

// Import eventListeners
import event_listeners from "./utils.js";
event_listeners();

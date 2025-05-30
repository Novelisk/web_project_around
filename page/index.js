import Card from "../components/card.js";
import FormValidator from "../components/formValidator.js";
import Section from "../components/Section.js";
import eventListeners from "../scripts/utils.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  profileName,
  profileAbout,
  popupImage,
  popupName,
  popupAbout,
  profileForm,
  addForm,
  editButton,
  addButton,
} from "../scripts/constants.js";

// User Info
const userInfo = new UserInfo(profileName, profileAbout);

// Popup: Image Viewer
const imagePopup = new PopupWithImage(popupImage);
imagePopup.setEventListeners();
const handleCardClick = ({ src, alt, title }) => {
  imagePopup.open({ src, alt, title });
};

// Section, new card, initial cards
const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#element__template", handleCardClick);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  ".elements"
);

cardList.renderedItems();

// Popup: Profile Form
const profileFormPopup = new PopupWithForm(
  "#profilePopup",
  ".popup__container",
  (formData) => {
    userInfo.setUserInfo({
      name: formData.name,
      job: formData.about,
    });
    profileFormPopup.close();
  }
);

profileFormPopup.setEventListeners();

// Popup: Add Card Form
const addFormPopup = new PopupWithForm(
  "#addPopup",
  ".popup__container",
  (formData) => {
    const newCard = new Card(
      { name: formData.name, link: formData.about },
      "#element__template",
      handleCardClick
    );
    const cardElement = newCard.generateCard();
    cardList.addItem(cardElement);
    addFormPopup.close();
  }
);
eventListeners();
addFormPopup.setEventListeners();

// Form Validation
const profileValidator = new FormValidator(profileForm);
const addValidator = new FormValidator(addForm);

profileValidator.enableValidation();
addValidator.enableValidation();

// Open Buttons
editButton.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  popupName.value = name;
  popupAbout.value = job;
  profileFormPopup.open();
});

addButton.addEventListener("click", () => {
  addFormPopup.open();
});

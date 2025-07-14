import Card from "../components/card.js";
import FormValidator from "../components/formValidator.js";
import Section from "../components/Section.js";
import eventListeners from "../scripts/utils.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
  profileName,
  profileAbout,
  profileAvatar,
  popupImage,
  popupName,
  popupAbout,
  profileForm,
  addForm,
  editButton,
  addButton,
  profileAvatarEditBtn,
  avatarForm,
} from "../scripts/constants.js";

// Set Api
const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "28b7690c-9f2e-44f9-b1b8-d3a0a018562f",
    "Content-Type": "application/json",
  },
});

// User Info
const userInfo = new UserInfo(profileName, profileAbout, profileAvatar);

// Popup: Image viewer
const imagePopup = new PopupWithImage(popupImage);
imagePopup.setEventListeners();

// Popup: Confirm delete card
const deleteConfirmPopup = new PopupWithConfirm("#deleteConfirmPopup");

// Click on card handler
const handleCardClick = ({ src, alt, title }) => {
  imagePopup.open({ src, alt, title });
};

let cardList;
let userId;

// Load intial user info & initial cards
api
  .getAppData()
  .then(([userData, cardsData]) => {
    userId = userData._id;

    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
    });

    userInfo.setUserAvatar(userData.avatar);

    cardList = new Section(
      {
        data: cardsData,
        renderer: (item) => {
          const card = new Card(
            item,
            "#element__template",
            handleCardClick,
            deleteConfirmPopup,
            userId,
            api
          );
          const cardElement = card.generateCard();
          return cardElement;
        },
      },
      ".elements"
    );
    cardList.renderedItems();
  })
  .catch((err) => console.log(`Error: ${err} loading info`));

// Popup: Edit profile avatar
const editProfileAvatar = new PopupWithForm(
  "#editProfileAvatar",
  ".popup__container",
  (formData) => {
    editProfileAvatar.renderLoading(true);
    api
      .updateAvatar(formData)
      .then((updateData) => {
        userInfo.setUserAvatar(updateData.avatar);
        editProfileAvatar.close();
      })
      .catch((err) => console.log(`Error ${err} updating avatar`))
      .finally(() => {
        editProfileAvatar.renderLoading(false);
      });
  }
);
editProfileAvatar.setEventListeners();

// Popup: Profile edit form
const profileFormPopup = new PopupWithForm(
  "#profilePopup",
  ".popup__container",
  (formData) => {
    profileFormPopup.renderLoading(true);
    api
      .updateUserInfo(formData)
      .then((updateUserInfo) => {
        userInfo.setUserInfo({
          name: updateUserInfo.name,
          about: updateUserInfo.about,
        });
        profileFormPopup.close();
      })
      .catch((err) => console.log(`Error: ${err} updating profile`))
      .finally(() => {
        profileFormPopup.renderLoading(false);
      });
  }
);
profileFormPopup.setEventListeners();

// Popup: Add card form
const addFormPopup = new PopupWithForm(
  "#addPopup",
  ".popup__container",
  (formData) => {
    addFormPopup.renderLoading(true);
    api
      .addNewCard({ name: formData.name, link: formData.link })
      .then((cardData) => {
        const newCard = new Card(
          {
            name: cardData.name,
            link: cardData.link,
            _id: cardData._id,
            likes: cardData.likes,
          },
          "#element__template",
          handleCardClick,
          deleteConfirmPopup,
          userId,
          api
        );
        const cardElement = newCard.generateCard();
        cardList.addItem(cardElement);
        addFormPopup.close();
      })
      .catch((err) => console.log(`Error: ${err} adding card`))
      .finally(() => {
        addFormPopup.renderLoading(false);
      });
  }
);
addFormPopup.setEventListeners();

// Form validators
const profileValidator = new FormValidator(profileForm);
const addValidator = new FormValidator(addForm);
const avatarValidator = new FormValidator(avatarForm);
avatarValidator.enableValidation();
profileValidator.enableValidation();
addValidator.enableValidation();

// Edit profile button (open)
editButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  popupName.value = name;
  popupAbout.value = about;
  profileFormPopup.open();
});

// Edit profile avatar button (open)
profileAvatarEditBtn.addEventListener("click", () => {
  editProfileAvatar.open();
});

// Add new card button (open)
addButton.addEventListener("click", () => {
  addFormPopup.open();
});

// General event listeners
eventListeners();

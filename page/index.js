import Card from "../components/card.js";
import FormValidator from "../components/formValidator.js";
import Section from "../components/Section.js";
import eventListeners from "../scripts/utils.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  getUserInfo,
  updateUserInfo,
  getInitialCards,
  addNewCard,
} from "../scripts/api.js";
import {
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

/* // User Info
const userInfo = new UserInfo(profileName, profileAbout);

// Popup: Image Viewer
const imagePopup = new PopupWithImage(popupImage);
imagePopup.setEventListeners();
const handleCardClick = ({ src, alt, title }) => {
  imagePopup.open({ src, alt, title });
};

// Section initial cards
// const cardList = new Section(
//   {
//     data: initialCards,
//     renderer: (item) => {
//       const card = new Card(item, "#element__template", handleCardClick);
//       const cardElement = card.generateCard();
//       cardList.addItem(cardElement);
//     },
//   },
//   ".elements"
// );
// cardList.renderedItems();

let cardList;

getInitialCards().then((cardsData) => {
  const cardList = new Section(
    {
      data: cardsData,
      renderer: (item) => {
        const card = new Card(item, "#element__template", handleCardClick);
        const cardElement = card.generateCard();
        // cardList.addItem(cardElement);
        return cardElement;
      },
    },
    ".elements"
  );
  cardList.renderedItems();
});

// Popup: Profile Form
// const profileFormPopup = new PopupWithForm(
//   "#profilePopup",
//   ".popup__container",
//   (formData) => {
//     userInfo.setUserInfo({
//       name: formData.name,
//       job: formData.about,
//     });
//     profileFormPopup.close();
//   }
// );
// profileFormPopup.setEventListeners();

const profileFormPopup = new PopupWithForm(
  "#profilePopup",
  ".popup__container",
  (formData) => {
    updateUserInfo(formData)
      .then((updateUserInfo) => {
        userInfo.setUserInfo({
          name: updateUserInfo.name,
          about: updateUserInfo.about,
        });
        profileFormPopup.close();
      })
      .catch((err) => console.log(`Error ${err} updating profile`));
  }
);
profileFormPopup.setEventListeners();

// Popup: Add Card Form
// const addFormPopup = new PopupWithForm(
//   "#addPopup",
//   ".popup__container",
//   (formData) => {
//     const newCard = new Card(
//       { name: formData.name, link: formData.about },
//       "#element__template",
//       handleCardClick
//     );
//     const cardElement = newCard.generateCard();
//     // cardList.addItem(cardElement);
//     addFormPopup.close();
//   }
// );
// eventListeners();
// addFormPopup.setEventListeners();

const addFormPopup = new PopupWithForm(
  "#addPopup",
  ".popup__container",
  (formData) => {
    addNewCard({ name: formData.name, link: formData.link })
      .then((cardData) => {
        const newCard = new Card(
          { name: cardData.name, link: cardData.link },
          "#element__template",
          handleCardClick
        );
        const cardElement = newCard.generateCard();
        cardList.addItem(cardElement);
        addFormPopup.close();
      })
      .catch((err) => console.log(`Error "${err}" adding card`));
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
  const { name, about } = userInfo.getUserInfo();
  popupName.value = name;
  popupAbout.value = about;
  profileFormPopup.open();
});

addButton.addEventListener("click", () => {
  addFormPopup.open();
});

// Server requests
// fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
//   method: "PATCH",
//   headers: {
//     authorization: "28b7690c-9f2e-44f9-b1b8-d3a0a018562f",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Probando PATCH",
//     about: "Ver si cambia",
//   }),
// })
//   .then((res) => res.json())
//   .then(console.log);

getUserInfo().then((result) => console.log(result)); */

// User Info
const userInfo = new UserInfo(profileName, profileAbout);

// Popup: Image viewer
const imagePopup = new PopupWithImage(popupImage);
imagePopup.setEventListeners();

// Click on card handler
const handleCardClick = ({ src, alt, title }) => {
  imagePopup.open({ src, alt, title });
};

let cardList;

// Load intial user info & initial cards
Promise.all([getUserInfo(), getInitialCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
    });

    cardList = new Section(
      {
        data: cardsData,
        renderer: (item) => {
          const card = new Card(item, "#element__template", handleCardClick);
          const cardElement = card.generateCard();
          cardList.addItem(cardElement);
        },
      },
      ".elements"
    );
    cardList.renderedItems();
  })
  .catch((err) => console.log(`Error: ${err} loading info`));

// Popup: Profile edit form
const profileFormPopup = new PopupWithForm(
  "#profilePopup",
  ".popup__container",
  (formData) => {
    updateUserInfo(formData)
      .then((updateUserInfo) => {
        userInfo.setUserInfo({
          name: updateUserInfo.name,
          about: updateUserInfo.about,
        });
        profileFormPopup.close();
      })
      .catch((err) => console.log(`Error: ${err} updating profile`));
  }
);
profileFormPopup.setEventListeners();

// Popup: Add card form
const addFormPopup = new PopupWithForm(
  "#addPopup",
  ".popup__container",
  (formData) => {
    addNewCard({ name: formData.name, link: formData.link })
      .then((cardData) => {
        const newCard = new Card(
          {
            name: cardData.name,
            link: cardData.link,
          },
          "#element__template",
          handleCardClick
        );
        const cardElement = newCard.generateCard();
        cardList.addItem(cardElement);
        addFormPopup.close();
      })
      .catch((err) => console.log(`Error: ${err} adding card`));
  }
);
addFormPopup.setEventListeners();

// Form validators
const profileValidator = new FormValidator(profileForm);
const addValidator = new FormValidator(addForm);
profileValidator.enableValidation();
addValidator.enableValidation();

// Edit profile button (open)
editButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  popupName.value = name;
  popupAbout.value = about;
  profileFormPopup.open();
});

// Add new card button (open)
addButton.addEventListener("click", () => {
  addFormPopup.open();
});

// General event listeners
eventListeners();

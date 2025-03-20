const editButton = document.querySelector(".profile__edit-btn");
const popupButton = document.querySelector(".popup__submit-btn");
const popup = document.querySelector(".popup");
const inputName = document.querySelector(".popup__input_type_name");
const inputAbout = document.querySelector(".popup__input_type_about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const closeButton = document.querySelector(".popup__close-tab");
const submitButton = document.querySelector(".popup__submit-btn");
const popupName = document.querySelector("#popupName");
const popupAbout = document.querySelector("#popupAbout");
const likeButton = document.querySelectorAll(".element__like-btn");

editButton.addEventListener("click", () => {
  popup.classList.remove("popup__visible");
  popupName.value = profileName.textContent;
  popupAbout.value = profileAbout.textContent;
});

popupButton.addEventListener("click", (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.classList.add("popup__visible");
});

function submitButtonBlack() {
  if (inputName.value === "" && inputAbout.value === "") {
    submitButton.classList.remove("popup__submit-btn_black");
  } else {
    submitButton.classList.add("popup__submit-btn_black");
  }
}

inputName.addEventListener("input", submitButtonBlack);
inputAbout.addEventListener("input", submitButtonBlack);

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.toggle("popup__visible");
});

likeButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.toggle("element__like-btn_black");
  });
});

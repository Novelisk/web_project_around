export default class UserInfo {
  constructor(userName, userAbout, avatarElement) {
    this._userName = userName;
    this._userAbout = userAbout;
    this._avatarElement = avatarElement;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
  }

  setUserAvatar(avatarUrl) {
    this._avatarElement.src = avatarUrl;
  }
}

export default class UserInfo {
  constructor(userName, userJob) {
    this._userName = userName;
    this._userJob = userJob;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent,
    };
  }

  setUserInfo({ name, job }) {
    this._userName.value = name;
    this._userJob.value = job;
  }
}

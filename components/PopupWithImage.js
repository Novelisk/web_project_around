import Popup from "./Popup.js";
import { popupImageImg, popupImageTitle } from "../scripts/constants.js";

export default class PopupWIthImage extends Popup {
  constructor(popupContainer) {
    super(popupContainer);
    this._image = popupImageImg;
    this._title = popupImageTitle;
  }

  _handleImageOpen({ src, alt, title }) {
    this._image.src = src;
    this._image.src = alt;
    this._title.textContent = title;
    super.open();
  }
}

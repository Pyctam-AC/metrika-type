/* import measureCard from './constants/constants.js'; */

export default class Cards {
  constructor (data, templateSelector) {
    this._title = data.name,
    this._href = data.href,
    this._image = data.image
    this._templateSelector = templateSelector
  }

  _getTemplate () {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector('.linkCard__item')
      .cloneNode(true);
  }

  createCard () {
    this._element = this._getTemplate ();

    this._element.href = this._href;
    this._element.querySelector('.linkCard__title').textContent = this._title;
    this._element.querySelector('.linkCard__image').src = this._image;

    return this._element;
  }
}

import ShadowElement from "../base/ShadowElement.js";

export default class CardDefault extends ShadowElement {
  static get displayName() {
    return "card-default";
  }

  constructor() {
    super();
    this._item = {};
  }

  set item(value = {}) {
    this._item = value;
  }

  template() {
    return `
      <style>
        .card-default {
          background-color: red;
        }
      </style>

      <div class="card-default">
        my custom card
      </div>
    `;
  }
}

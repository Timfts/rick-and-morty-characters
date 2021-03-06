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
          
        }
      </style>

      <div class="card-default">
        <slot></slot>
      </div>
    `;
  }
}

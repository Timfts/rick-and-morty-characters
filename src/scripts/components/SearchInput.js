import ShadowElement from "../base/ShadowElement.js";

export default class SearchInput extends ShadowElement {
  static get displayName() {
    return "search-input";
  }
  constructor() {
    super();
    this._typingEvent = this._typingEvent.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this._inputElement.addEventListener("keyup", this._typingEvent);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._inputElement.removeEventListener("keyup", this._typingEvent);
  }

  get _inputElement() {
    return this.querySelector("input");
  }

  _typingEvent(e) {
    const target = e.target || {};
    const value = target.value;
    console.log(value);
  }

  template() {
    return `
      <style>
        :host {
          display:flex;
          width:100%;
        }
        input {
          padding: 20px;
          font-size:17px;
          flex:1;
          border-radius:30px;
          outline:none;
          border: 1px solid black;
        }
      </style>
      <input type="text" placeholder="Character name" />
    `;
  }
}

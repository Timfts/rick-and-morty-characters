import ShadowElement from "../base/ShadowElement.js";

export default class MyCounter extends ShadowElement {
  static get displayName() {
    return "my-counter";
  }

  constructor() {
    super();
    this.counter = 0;
    this._handleClick = this._handleClick.bind(this);
  }

  /** @override */
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this._handleClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this._handleClick);
  }

  _handleClick(e) {
    const target = e.composedPath()[0] || {};
    const id = target.id;
    if (id === "add") {
      this._addNumber();
    } else if (id === "subtract") {
      this._removeNumber();
    }
    this._updateCounter();
  }

  _addNumber() {
    this.counter += 1;
  }

  _removeNumber() {
    this.counter -= 1;
  }

  _updateCounter() {
    const counter = this.querySelector("#counter");
    counter.innerHTML = this.counter;
  }

  /** @override */
  template() {
    return `
      <button id="subtract"> - </button>
        <span id="counter">${this.counter}</span>
      <button id="add"> + </button>
    `;
  }
}

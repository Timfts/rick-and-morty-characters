import BaseComponent from "/logic/base/BaseElement.js";

export default class MyCounter extends BaseComponent {
  static displayName = "my-counter";

  constructor() {
    super();
    this.counter = 0;
  }

  connectedCallback() {
    this.startShadow();
    this._startListeners();
  }

  _queryElements() {
    return {
      subtractBtn: this.queryElements("#subtract"),
      addBtn: this.queryElements("#add"),
      counter: this.queryElements("#counter"),
    };
  }

  _startListeners() {
    const { subtractBtn, addBtn } = this._queryElements();
    subtractBtn.addEventListener("click", this._removeNumber);
    addBtn.addEventListener("click", this._addNumber);
  }

  _cleanListeners() {
    const { subtractBtn, addBtn } = this._queryElements();
    subtractBtn.removeEventListener("click", this._removeNumber);
    addBtn.removeEventListener("click", this._addNumber);
  }

  _addNumber = () => {
    this.counter += 1;
    this._updateCounter();
  };

  _removeNumber = () => {
    this.counter -= 1;
    this._updateCounter();
  };

  _updateCounter() {
    const { counter } = this._queryElements();
    counter.innerHTML = this.counter;
  }

  template() {
    return `
      <button id="subtract"> - </button>
      <span id="counter">${this.counter}</span>
      <button id="add"> + </button>
    `;
  }
}

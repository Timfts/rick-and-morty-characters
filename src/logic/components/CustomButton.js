import BaseElement from "/logic/base/BaseElement.js";

export default class CustomButton extends BaseElement {
  static displayName = "custom-button";

  style = `
    button{
      outline: none;
      color: red;
    }
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.startShadow();
    const buttonRoot = this.queryElement("button");
    buttonRoot.addEventListener("click", this.onClickButton);
  }

  onClickButton() {
    alert("cenoura");
  }

  // @override
  template() {
    return `
      <button>
        <slot></slot>
        <p>test</p>
      </button>
    `;
  }
}

import ShadowElement from "../base/ShadowElement.js";

export default class CustomButton extends ShadowElement {
  static get displayName() {
    return "custom-button";
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  // @override
  template() {
    return `
      <button>
        <slot></slot>
      </button>
    `;
  }
}

import ShadowElement from "../base/ShadowElement.js";

export default class CustomButton extends ShadowElement {
  static displayName = "custom-button";

  constructor() {
    super();
  }

  connectedCallback() {
    this.startShadow();
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

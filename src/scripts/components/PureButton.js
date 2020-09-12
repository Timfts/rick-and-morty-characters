const constants = {
  LABEL_ATTR: "label",
};

export default class PureButton extends HTMLElement {
  static get displayName() {
    return "pure-button";
  }
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(this._createElement());
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === constants.LABEL_ATTR && oldValue) {
      const buttonRoot = this.querySelector("button");
      this._updateButtonContent(buttonRoot);
    }
  }

  static get observedAttributes() {
    return [constants.LABEL_ATTR];
  }

  set label(customLabel) {
    this.setAttribute(constants.LABEL_ATTR, customLabel);
  }

  _updateButtonContent(buttonRoot) {
    buttonRoot.innerHTML = this.getAttribute(constants.LABEL_ATTR);
  }

  _createElement() {
    const buttonRoot = document.createElement("button");
    this._updateButtonContent(buttonRoot);

    return buttonRoot;
  }
}

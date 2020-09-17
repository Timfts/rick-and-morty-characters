export default class ShadowElement extends HTMLElement {
  constructor() {
    super();
    const shadowReference = this.attachShadow({ mode: "open" });
    this.shadow = shadowReference;
  }

  connectedCallback() {
    this._startShadow();
  }

  /** @override */
  querySelector(query) {
    return this.shadow.querySelector(query);
  }

  querySelectorAll(query) {
    return this.shadow.querySelectorAll(query);
  }

  template() {
    return "";
  }

  _startShadow() {
    const template = this.template();

    this.shadow.innerHTML = template;
  }
}

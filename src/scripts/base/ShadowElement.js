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
  queryElements(query, all = false) {
    if (all) {
      return this.shadow.querySelectorAll(query);
    } else {
      return this.shadow.querySelector(query);
    }
  }

  template() {
    return "";
  }

  _startShadow() {
    const template = this.template();

    this.shadow.innerHTML = template;
  }
}

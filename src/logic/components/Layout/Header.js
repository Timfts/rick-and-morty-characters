import BaseElement from "/logic/base/BaseElement.js";

export default class Header extends BaseElement {
  static displayName = "header-component";

  style = `
    header {
      background-color:var(--header-color, black);
      height: 50px;
      display:flex;
      align-items:center;
      justify-content:center;
      position:fixed;
      width:100%;
      top:0;
    }

    h2{
      color:blue;
    }
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.startShadow();
  }

  template() {
    return `
      <header>
        <slot></slot>
      </header>
    `;
  }
}

import ShadowElement from "/logic/base/ShadowElement.js";

export default class Header extends ShadowElement {
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

    this.addEventListener("click", () => {
      console.log(this.queryElements("h2"));
    });
  }

  template() {
    return `
      <header>
        <slot></slot>
      </header>
    `;
  }
}

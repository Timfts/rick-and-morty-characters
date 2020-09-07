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

    const buttond = this.queryElements("pure-button");
    buttond.addEventListener("click", (e) => {
      buttond.label = "sd";
    });
  }

  template() {
    return `
      <header>
        <slot></slot>
        <pure-button label="batatatinha"></pure-button>
      </header>
    `;
  }
}

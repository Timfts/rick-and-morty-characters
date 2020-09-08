import ShadowElement from "../../base/ShadowElement.js";

export default class Header extends ShadowElement {
  static displayName = "header-component";

  style = `
    :host {
      width: 100%;
      display:block;
      height: 60px;
      position:fixed;
      top:0;
    }
    header {
      background-color: var(--header-color, black);
      display:flex;
      align-items:center;
      justify-content:center;
      padding:0 20px;
      height: 100%;
    }

    .title-holder{
      flex:1;
      align-items:center;
      justify-content:center;
    }

    ::slotted(h2){
      color:white;
      text-align:center;
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
        <div class="title-holder">
          <slot></slot>
        </div>
        <div class="btn-holder">
          <theme-toggle-button>change theme</theme-toggle-button>
        </div>
      </header>
    `;
  }
}

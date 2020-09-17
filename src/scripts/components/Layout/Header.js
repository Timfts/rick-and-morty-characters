import ShadowElement from "../../base/ShadowElement.js";

export default class Header extends ShadowElement {
  static get displayName() {
    return "header-component";
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  template() {
    return `
      <style>
        :host {
          width: 100%;
          display:block;
          height: 60px;
          position:fixed;
          top:0;
        }
        header {
          background-color: var(--header-bg-color, black);
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
          color: var(--header-title-color, white);
          text-align:center;
        }
      </style>
      <header>
        <div class="title-holder">
          <slot></slot>
        </div>
        <div class="btn-holder">
          <theme-toggle-button 
            color-variable="--header-title-color">
          </theme-toggle-button>
        </div>
      </header>
    `;
  }
}

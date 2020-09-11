import ShadowElement from "../base/ShadowElement.js";
import ThemeManagerMixin from "../mixins/ThemeManagerMixin.js";

class MainContainer extends ThemeManagerMixin(ShadowElement) {
  static displayName = "main-container";

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    
  }

  template() {
    return `
      <div>
        <slot></slot>
      </div>
    `;
  }
}

export default MainContainer;

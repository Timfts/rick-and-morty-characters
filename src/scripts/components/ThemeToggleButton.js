import CustomButton from "./CustomButton.js";
import ThemeManagerMixin from "../mixins/ThemeManagerMixin.js";

class ThemeToggleButton extends ThemeManagerMixin(CustomButton) {
  static get displayName() {
    return "theme-toggle-button";
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener("click", () => {
      this.toggleThemes(["dark", "light"]);
    });
  }

  template() {
    return `
      <style>
        button{
          background-color:red;
        }
      </style>
      <button>
        <slot></slot>
      </button>
    `;
  }
}

export default ThemeToggleButton;

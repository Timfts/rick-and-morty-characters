import CustomButton from "./CustomButton.js";
import ThemeManagerMixin from "../mixins/ThemeManagerMixin.js";

class ThemeToggleButton extends ThemeManagerMixin(CustomButton) {
  static displayName = "theme-toggle-button";

  style = `
    button{
      background-color:red;
    }
  `;
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener("click", () => {
      this.toggleThemes(["dark", "light"]);
    });
  }
}

export default ThemeToggleButton;

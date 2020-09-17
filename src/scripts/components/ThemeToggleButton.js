import CustomButton from "./CustomButton.js";
import ThemeManagerMixin from "../mixins/ThemeManagerMixin.js";

class ThemeToggleButton extends ThemeManagerMixin(CustomButton) {
  static get displayName() {
    return "theme-toggle-button";
  }

  constructor() {
    super();
    this._toggleThemeEvent = this._toggleThemeEvent.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener("click", this._toggleThemeEvent);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this._toggleThemeEvent);
  }

  _toggleThemeEvent(e) {
    this.toggleThemes(["dark", "light"]);
  }

  template() {
    const colorVarAttr = this.getAttribute("color-variable");
    const colorVarProp = colorVarAttr ? `color: var(${colorVarAttr})` : "";

    return `
      <style>
        button {
          font-family: "Material Icons";
          text-decoration:none;
          background-color: transparent;
          border-radius:20px;
          outline:none;
          border:none;
          cursor:pointer;
        }
        i {
          font-style: normal;
          font-size:20px;
          ${colorVarProp}
        }
      </style>
      <button>
        <i>brightness_3</i>
      </button>
    `;
  }
}

export default ThemeToggleButton;

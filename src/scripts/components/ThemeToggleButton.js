import CustomButton from "./CustomButton.js";

export default class ThemeToggleButton extends CustomButton {
  static displayName = "theme-toggle-button";

  style = `
    button{
      background-color:red;
    }
  `;
  constructor() {
    super();
    this._dispatchThemeEvent = this._dispatchThemeEvent.bind(this);
  }
  /** @override */
  connectedCallback() {
    this.startShadow();

    this.addEventListener("click", this._dispatchThemeEvent);
    this._listenForThemeChange();
  }

  disconnectedCallback() {
    this.removeEventListener("click", this._dispatchThemeEvent);
  }

  _listenForThemeChange() {
    window.addEventListener("themeToggled", () => {
      console.log("change style");
    });
  }

  _dispatchThemeEvent() {
    const themeEvent = new CustomEvent("toggleTheme", {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(themeEvent);
  }
}

import { registerComponent } from "./utils.js";

export default class App {
  constructor({ componentsList = [] }) {
    this.componentsList = componentsList;
  }

  run() {
    this._startThemeToggleEvent();
    this._registerComponents();
  }

  _startThemeToggleEvent() {
    // check local storage
    // set theme
    // start litener
    document.addEventListener("toggleTheme", () => {
      const body = document.querySelector("body");
      this._dispatchThemeToggled();
    });
  }

  _dispatchThemeToggled() {
    const themeToggleEvent = new CustomEvent("themeToggled", {
      composed: true,
    });

    window.dispatchEvent(themeToggleEvent);
  }

  _registerComponents() {
    this.componentsList.forEach((ComponentClass) => {
      const componentDisplayName = ComponentClass.displayName;
      if (!componentDisplayName) {
        throw new Error("component without displayName");
      } else {
        registerComponent(componentDisplayName, ComponentClass);
      }
    });
  }
}

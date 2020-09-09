import { registerComponent } from "./utils.js";
import ThemeManagerMixin from "./base/themeUtils.js";

export default class App extends ThemeManagerMixin {
  constructor({ componentsList = [] }) {
    super();
    this.componentsList = componentsList;
  }

  run() {
    this.startThemeManager();
    this._registerComponents();
  }

  _startThemeController() {
    const savedTheme = window.localStorage.getItem("theme");

    document.addEventListener("toggleTheme", () => {
      const body = document.querySelector("body");
      this._dispatchThemeToggled();
    });
  }

  _dispatchThemeToggled() {
    const themeToggleEvent = new CustomEvent("themeToggled", {
      composed: true,
      detail: {
        data: "test",
      },
    });
    window.dispatchEvent(themeToggleEvent);
  }

  _restoreTheme() {}

  /**
   *
   * @param {('dark' | 'light')} [theme = 'light'] - theme to be selected
   */
  _toggleTheme(theme = "light") {
    const bodyClasses = {
      dark: "dark-theme",
      light: "light-theme",
    };
    const body = document.querySelector("body");
    const themeToggledEvent = new CustomEvent("themeToggled", {
      composed: true,
      detail: {
        theme,
      },
    });

    const isDarkSet = body.classList.contains(bodyClasses.dark);
    const isLightSet = body.classList.contains(bodyClasses.light);
    const removeBodyClass = (bodyClass) => body.classList.remove(bodyClass);
    const addBodyClass = (bodyClass) => body.classList.add(bodyClass);
    const saveSelectedTheme = (theme) =>
      window.localStorage.setItem("theme", theme);

    if (isDarkSet) {
      removeBodyClass(bodyClasses.dark);
      addBodyClass(bodyClasses.light);
      saveSelectedTheme(theme);
    } else if (isLightSet) {
      removeBodyClass(bodyClasses.light);
      addBodyClass(bodyClasses.dark);
      saveSelectedTheme(theme);
    }

    window.dispatchEvent(themeToggledEvent);
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

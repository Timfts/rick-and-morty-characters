import { bodyReference } from "../utils.js";

const themeClasses = {
  light: "light-theme",
  dark: "dark-theme",
};

/**
 * Set the theme class in the body
 * @param {string} theme - theme to be selected
 */
export function setAppTheme(theme) {
  const themeClass = themeClasses[theme];
  if (!themeClass) throw new TypeError(`theme "${theme}" is not defined`);

  const body = document.querySelector("body");
  const bodyClasses = body.classList;
  const bodyClassesArray = Array.from(bodyClasses);
  const themeClassesArray = Object.keys(themeClasses).map(
    (themeKey) => themeClasses[themeKey]
  );

  const clearBodyClasses = () =>
    bodyClassesArray.forEach((bodyClass) => {
      const isThemeClass = themeClassesArray.includes(bodyClass);
      const isThemeAlreadySet = themeClass == bodyClass;
      if (isThemeClass && !isThemeAlreadySet) {
        body.classList.remove(bodyClass);
      }
    });

  clearBodyClasses();
}

class ThemeManagerMixin {
  registerThemes(themeKeys = []) {
    console.log("cenoura");
  }

  getRegisteredThemes() {}

  startThemeManager() {}

  listenForAppThemeChange() {}

  dispatchChangeTheme() {}

  clearAppThemes() {
    bodyReference.classList;
  }
}

export default ThemeManagerMixin;

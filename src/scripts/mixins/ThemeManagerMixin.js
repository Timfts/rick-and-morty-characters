import { eventNamesConstants, LOCAL_STORAGE_KEY } from "../config/theme.js";
import { validateDomNode } from "../utils.js";

export default (ParentClass) =>
  class ThemeManagerMixin extends ParentClass {
    dispatchChangeTheme(themeKey) {
      validateDomNode(this);

      const changeThemeEvent = new CustomEvent(
        eventNamesConstants.CHANGE_THEME,
        {
          detail: {
            theme: themeKey,
          },
          bubbles: true,
          composed: true,
        }
      );

      this.dispatchEvent(changeThemeEvent);
    }

    toggleThemes(themesArray = []) {
      const currentTheme = this.getCurrentTheme();
      const currentThemeIndex = themesArray.indexOf(currentTheme);
      const themeArrayContainsCurrentTheme = !(currentThemeIndex < 0);
      const currentThemeIsLast = currentThemeIndex === themesArray.length - 1;

      const shouldGoFromStart =
        !themeArrayContainsCurrentTheme || currentThemeIsLast;

      if (shouldGoFromStart) {
        this.dispatchChangeTheme(themesArray[0]);
      } else {
        const nextTheme = themesArray[currentThemeIndex + 1];
        this.dispatchChangeTheme(nextTheme);
      }
    }

    getCurrentTheme() {
      return localStorage.getItem(LOCAL_STORAGE_KEY);
    }

    listenForThemeChange(callback) {
      window.addEventListener(
        eventNamesConstants.THEME_CHANGED,
        this._themeChangeEvent(callback)
      );
    }

    _themeChangeEvent(callback) {
      return (e) => {
        const eventData = e.detail;
        const themeChoosed = eventData.theme;

        callback(themeChoosed);
      };
    }
  };

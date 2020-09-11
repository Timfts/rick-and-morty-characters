export const eventNamesConstants = {
  THEME_CHANGED: "onThemeChanged",
  CHANGE_THEME: "onChangeTheme",
};

export const LOCAL_STORAGE_KEY = "themeKey";

const bodyReference = document.querySelector("body");

const getNewThemeClass = (themeKey) => `${themeKey}-theme`;

function addThemeClassToBody(themeClass) {
  bodyReference.classList.add(themeClass);
}

function clearThemeClassesFromBody(themeClass) {
  const bodyClasses = Array.from(bodyReference.classList);
  return bodyClasses.forEach((className) => {
    const isThemeClass = className.endsWith("-theme");
    if (isThemeClass) {
      bodyReference.classList.remove(className);
    }
  });
}

function getCurrentThemeClass() {
  const bodyClasses = Array.from(bodyReference.classList);
  return bodyClasses.find((className) => className.endsWith("-theme"));
}

function validateThemeKey(themeKey) {
  if (!themeKey) return false;
  const isString = typeof themeKey === "string";
  const isStringUndefined = themeKey === "undefined" || themeKey === "null";

  return isString && !isStringUndefined;
}

function checkIfAlreadyHasTheme() {
  const currentThemeClass = getCurrentThemeClass();
  const hasClassOnBody = !!currentThemeClass;
  const keyOnStore = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  const isKeyOnStoreValid = validateThemeKey(keyOnStore);

  if (isKeyOnStoreValid) {
    clearThemeClassesFromBody();
    const newClass = `${keyOnStore}-theme`;
    bodyReference.classList.add(newClass);
  } else if (hasClassOnBody) {
    const themeKey = currentThemeClass.replace("-theme", "");
    window.localStorage.setItem(LOCAL_STORAGE_KEY, themeKey);
  }
}

export function configAppTheming() {
  checkIfAlreadyHasTheme();
  const getOnChangeThemeEvent = (themeKey) =>
    new CustomEvent(eventNamesConstants.THEME_CHANGED, {
      detail: {
        theme: themeKey,
      },
    });

  window.addEventListener(eventNamesConstants.CHANGE_THEME, (e) => {
    const eventData = e.detail;
    const themeToUse = eventData.theme;
    const newThemeClass = getNewThemeClass(themeToUse);
    const currentThemeClass = getCurrentThemeClass();
    const isSameTheme = newThemeClass === currentThemeClass;

    if (!isSameTheme) {
      clearThemeClassesFromBody();
      addThemeClassToBody(newThemeClass);
      window.localStorage.setItem(LOCAL_STORAGE_KEY, themeToUse);
      const themeChangedEvent = getOnChangeThemeEvent(themeToUse);
      window.dispatchEvent(themeChangedEvent);
    }
  });
}

import { registerComponent } from "./utils.js";
import { configAppTheming } from "./config/theme.js";

export default class App {
  constructor({ componentsList = [], themes = [] }) {
    this.componentsList = componentsList;
    this.themes = themes;
  }

  run() {
    configAppTheming();
    this._registerComponents();
  }

  _registerComponents() {
    if (!this.componentsList) {
      throw new Error("no components to be registered");
    }

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

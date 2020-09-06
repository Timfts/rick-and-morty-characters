export default class App {
  constructor({ componentsList = [] }) {
    this.componentsList = componentsList;
  }

  run() {
    this._registerComponents();
  }

  _registerComponents() {
    this.componentsList.forEach((ComponentClass) => {
      const componentDisplayName = ComponentClass.displayName;
      if (!componentDisplayName) {
        throw new Error("component without displayName");
      } else {
        window.customElements.define(componentDisplayName, ComponentClass);
      }
    });
  }
}

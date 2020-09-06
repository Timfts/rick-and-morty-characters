import App from "/logic/App.js";
import CustomButton from "/logic/components/CustomButton.js";
import Header from "/logic/components/Layout/Header.js";
import MyCounter from "/logic/components/MyCounter.js";

const componentsList = [Header, MyCounter];

const myApp = new App({ componentsList });

myApp.run();

/* window.customElements.define(CustomButton.displayName, CustomButton);
window.customElements.define(HeaderComponent.displayName, HeaderComponent);
window.customElements.define(MyCounter.displayName, MyCounter); */

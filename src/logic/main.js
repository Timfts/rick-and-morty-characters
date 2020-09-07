import App from "/logic/App.js";
import CustomButton from "/logic/components/CustomButton.js";
import Header from "/logic/components/Layout/Header.js";
import MyCounter from "/logic/components/MyCounter.js";

const componentsList = [Header, MyCounter, CustomButton];

const myApp = new App({ componentsList });

myApp.run();

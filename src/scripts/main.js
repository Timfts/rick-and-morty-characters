import App from "./App.js";
import CustomButton from "./components/CustomButton.js";
import MyCounter from "./components/MyCounter.js";
import Header from "./components/Layout/Header.js";
import PureButton from "./components/PureButton.js";
import ThemeToggleButton from "./components/ThemeToggleButton.js";

const componentsList = [
  Header,
  MyCounter,
  CustomButton,
  PureButton,
  ThemeToggleButton,
];

const myApp = new App({ componentsList });

myApp.run();

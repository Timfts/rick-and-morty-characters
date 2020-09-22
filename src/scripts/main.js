import App from "./App.js";
import CustomButton from "./components/CustomButton.js";
import MyCounter from "./components/MyCounter.js";
import Header from "./components/Layout/Header.js";
import PureButton from "./components/PureButton.js";
import ThemeToggleButton from "./components/ThemeToggleButton.js";
import MainContainer from "./components/MainContainer.js";
import SearchInput from "./components/SearchInput.js";
import CardDefault from "./components/CardDefault.js";
import CardGrid from "./components/CardGrid.js";

const usedComponents = [
  MainContainer,
  Header,
  MyCounter,
  CustomButton,
  PureButton,
  ThemeToggleButton,
  SearchInput,
  CardDefault,
  CardGrid,
];

const initialAppState = {
  charachtersList: [],
};

const myApp = new App({
  componentsList: usedComponents,
  initialState: initialAppState,
});

myApp.run();

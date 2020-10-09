import ShadowElement from "../base/ShadowElement.js";
import { getRequest, CHARACTERS_ENDPOINT } from "../config/api.js";
import GlobalStoreManagerMixin from "../mixins/GlobalStoreManagerMixin.js";

export default class SearchInput extends GlobalStoreManagerMixin(
  ShadowElement
) {
  static get displayName() {
    return "search-input";
  }
  constructor() {
    super();
    this._typingEvent = this._typingEvent.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this._inputElement.addEventListener("keyup", this._typingEvent);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._inputElement.removeEventListener("keyup", this._typingEvent);
  }

  get _inputElement() {
    return this.querySelector("input");
  }

  _typingEvent(e) {
    const target = e.target || {};
    const value = target.value;
    this._searchForChars(value);
  }

  _searchForChars(inputValue) {
    this.modifyGlobalState("isCharactersLoading", true);

    getRequest(`${CHARACTERS_ENDPOINT}/?name=${inputValue}`).then(
      (response) => {
        const safeResponse = response || {};
        const characters = safeResponse.results || [];

        if (characters) {
          this.modifyGlobalState("charactersList", characters);
          this.modifyGlobalState("isCharactersLoading", false);
        }
      }
    );
  }

  template() {
    return `
      <style>
        :host {
          display:flex;
          width:100%;
        }
        input {
          padding: 20px;
          font-size:17px;
          flex:1;
          border-radius:20px;
          outline:none;
          border:none;
          background-color: var(--search-input-bg, gray);
          box-shadow: 9px 9px 19px -1px rgba(0,0,0,0.22);
        }
      </style>
      <input type="text" placeholder="Character name" />
    `;
  }
}

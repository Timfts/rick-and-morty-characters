import ShadowElement from "../base/ShadowElement.js";
import GlobalStoreManagerMixin from "../mixins/GlobalStoreManagerMixin.js";
import { mapElements } from "../utils.js";

export default class CardGrid extends GlobalStoreManagerMixin(ShadowElement) {
  static get displayName() {
    return "card-grid";
  }

  constructor() {
    super();
    this._renderCards = this._renderCards.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this.onGlobalStateChange("charactersList", this._renderCards);
  }

  get _cardGridContainer() {
    return this.querySelector(".card-grid");
  }

  _renderCards({ currentState: newCharacters }) {
    const newCards = mapElements(newCharacters).render(
      (character) => `<card-default>${character.name}</card-default>`
    );

    this._cardGridContainer.innerHTML = newCards;
  }

  template() {
    return `
      <style> 
        .card-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
      </style>
      <div class="card-grid"></div>
    `;
  }
}

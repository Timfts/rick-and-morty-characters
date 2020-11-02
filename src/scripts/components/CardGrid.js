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
    this.gutterSize = '24px'
  }

  connectedCallback() {
    super.connectedCallback();

    this.onGlobalStateChange("charactersList", this._renderCards);
  }

  get _cardGridContainer() {
    return this.querySelector(".card-grid__container");
  }

  _renderCards({ currentState: newCharacters }) {
    const newCards = mapElements(newCharacters).render(
      (character) =>
        `<div class="card-grid__card-container">
          <card-default>${character.name}</card-default>
        </div>`
    );

    this._cardGridContainer.innerHTML = newCards;
  }

  template() {
    return `
      <style> 
        .card-grid {
          max-width: 1280px;
          margin: 0 auto;
          padding:5px 20px;
        }

        .card-grid__container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .card-grid__card-container {
          flex-shrink: 0;
          flex-grow: 0;
          width: calc(calc(100% - ${this.gutterSize}) / 2);
          margin-bottom: ${this.gutterSize};
          height: 200px;
          background-color: blue;
        }

        @media(min-width: 600px) {
          .card-grid__card-container {
            width: calc(calc(100% - 2 * ${this.gutterSize}) / 3);
          }
        }

        @media (min-width: 1280px) {
          .card-grid {
            padding: 5px 0;
          }

          .card-grid__card-container {
            width: calc(calc(100% - 3 * ${this.gutterSize}) / 4);
          }
        }


      </style>
      <div class="card-grid">
        <div class="card-grid__container">
        </div>
      </div>
    `;
  }
}

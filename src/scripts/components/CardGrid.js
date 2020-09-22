import ShadowElement from "../base/ShadowElement.js";

export default class CardGrid extends ShadowElement {
  static get displayName() {
    return "card-grid";
  }

  constructor() {
    super();
  }

  template() {
    return `
      <style> 
        .card-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
      </style>
      <div class="card-grid">
        <card-default></card-default>
        <card-default></card-default>
        <card-default></card-default>
        <card-default></card-default>
        <card-default></card-default>
        <card-default></card-default>
        <card-default></card-default>
        <card-default></card-default>
      <div>
    `;
  }
}

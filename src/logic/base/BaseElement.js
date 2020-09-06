export default class BaseElement extends HTMLElement {
  style = "";

  constructor() {
    super();
    const shadowReference = this.attachShadow({ mode: "open" });
    this.shadow = shadowReference;
  }

  queryElements(query, all = false) {
    if (all) {
      return this.shadow.querySelectorAll(query);
    } else {
      return this.shadow.querySelector(query);
    }
  }

  template() {
    return "";
  }

  startShadow() {
    const template = this.template();
    const styleTemplate = !!this.style ? this.style : "";

    this.shadow.innerHTML = `
      <style>
        *:
        *::before,
        *::after{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family: 'Quicksand', sans-serif;
        }
        ${styleTemplate}
      </style>
      ${template}
    `;
  }
}

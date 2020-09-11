/**
 * @typedef {HTMLElement} CustomWebComponent - Custom web-component
 * @extends HTMLElement
 */

/**
 *
 * @param {string} elementDisplayName - tag name to be used in the html templates
 * @param {CustomWebComponent} ComponentClass - A class that extends HTMLElement
 */
export function registerComponent(elementDisplayName, ComponentClass) {
  window.customElements.define(elementDisplayName, ComponentClass);
}

/**
 * Check if object is a dom node
 * @param {HTMLElement} domNode
 */
export function validateDomNode(domNode) {
  if (!domNode instanceof HTMLElement) {
    throw new TypeError("invalid dom node");
  }
}

export const bodyReference = document.querySelector("body");

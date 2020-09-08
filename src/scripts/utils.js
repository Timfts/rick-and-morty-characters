/**
 * 
 * @param {string} elementDisplayName - tag name to be used in the html templates 
 * @param {*} ComponentClass - A class that extends HTMLElement
 */
export function registerComponent(elementDisplayName, ComponentClass) {
  window.customElements.define(elementDisplayName, ComponentClass);
}

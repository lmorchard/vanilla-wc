import {html} from "https://unpkg.com/lit-html?module";
import "https://unpkg.com/classnames?module";
import {BaseElement} from "../index.js";

class PhotonButton extends BaseElement {
  static get observedAttributes() {
    return ["type", "size"];
  }

  constructor() {
    super();
    this.handle_onClick = ev => this.onClick(ev);
  }

  template({ type, size }) {
    const className = classNames([
      "button",
      type && `button--${type}`,
      size && `button--${size}`,
    ]);
    return html`
      <link rel="stylesheet" href="./components/PhotonButton/index.css" />
      <button @click=${this.handle_onClick} class="${className}">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("photon-button", PhotonButton);

//import {html} from "https://unpkg.com/lit-html?module";
//import "https://unpkg.com/classnames?module";
import {html} from "../../node_modules/lit-html";
import classNames from "../../node_modules/classnames";
import {BaseElement} from "../index.js";

import styles from "./index.css";

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
      <style>${styles.toString()}</style>
      <button @click=${this.handle_onClick} class="${className}">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("photon-button", PhotonButton);

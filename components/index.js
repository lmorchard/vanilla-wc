// import {render} from 'https://unpkg.com/lit-html?module';
import {render} from "../node_modules/lit-html";

export class BaseElement extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
  
  render() {
    render(this.template(this.props), this.shadow);
  }
  
  get props() {
    return this.constructor.observedAttributes.reduce(
      (acc, name) => ({
        ...acc,
        [name]: this.getAttribute(name)
      }),
      {}
    );
  }
}


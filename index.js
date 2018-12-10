import {html, render} from "./node_modules/lit-html/lit-html.js";
import "./components/PhotonButton/index.js";

const $$ = id => document.getElementById(id);

console.log("HELLO WORLD");

render(html`
  <div>
    <h1>Hello</h1>
    <photon-button type="primary" .onClick=${() => console.log("CLICKY", Date.now())}>Butts</photon-button>
    <photon-button size="puffy" .onClick=${() => console.log("CLICKY", Date.now())}>Butts</photon-button>
  </div>
`, document.body); // $$("app"));

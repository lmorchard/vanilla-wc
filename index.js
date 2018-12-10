import {html, render} from 'https://unpkg.com/lit-html?module';
import "./components/PhotonButton/index.js";

const $$ = id => document.getElementById(id);

console.log("HELLO WORLD");

render(html`
  <div>
    <h1>Hello</h1>
    <photon-button type="primary" .onClick=${() => console.log("CLICKY", Date.now())}>Butts</photon-button>
  </div>
`, $$("app"));

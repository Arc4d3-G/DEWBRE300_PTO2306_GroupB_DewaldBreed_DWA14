import { LitElement, html } from '../libs/lit-all.js';
import '../components/my-header.js';
import '../components/my-footer.js';
import '../components/tally-counter.js';

class TallyApp extends LitElement {
  render() {
    return html`
      <my-header></my-header>
      <tally-counter></tally-counter>
      <my-footer></my-footer>
    `;
  }
}

customElements.define('tally-app', TallyApp);

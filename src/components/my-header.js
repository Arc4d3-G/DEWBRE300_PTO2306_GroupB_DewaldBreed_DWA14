import { LitElement, html, css } from '../libs/lit-all.js';

class MyHeader extends LitElement {
  static styles = css`
    header {
      background-color: rgb(67 166 245);
      color: white;
    }
    h1 {
      margin: 0;
      padding: 10px 10px 10px 30px;
    }
  `;
  render() {
    return html`
      <header>
        <h1>Tally Count</h1>
      </header>
    `;
  }
}
customElements.define('my-header', MyHeader);

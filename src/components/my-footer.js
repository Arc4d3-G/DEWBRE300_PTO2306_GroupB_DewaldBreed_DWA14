import { LitElement, html, css } from '../libs/lit-all.js';

class MyFooter extends LitElement {
  static styles = css`
    footer {
      background-color: rgb(67 166 245);
      color: white;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2.5rem;
    }
    h3 {
      margin: 0;
      padding: 10px 10px 10px 30px;
    }
  `;
  render() {
    return html`
      <footer>
        <h3>A Javascript Tally Counter Using Lit.dev Custom Components</h3>
      </footer>
    `;
  }
}
customElements.define('my-footer', MyFooter);

import { LitElement, html, css } from '../libs/lit-all.js';
import { getState, dispatch, subscribe, states } from '../model/store.js';
import { actions, setPhase } from '../model/actions.js';

/**
 * Subscribe to global state & use {@link setPhase} to change state.phase according to
 * current count value.
 */
subscribe((prev, next) => {
  next.phase = setPhase(next);
  console.log(`Previous state count: ${prev.count}, Current state count: ${next.count}`);
  console.log(`Previous state phase: "${prev.phase}", Current state phase: "${next.phase}"`);
});

class TallyCounter extends LitElement {
  static properties = {
    disabled: { type: Boolean },
    count: { type: Number },
    phase: { type: String },
  };
  static styles = css`
    h1 {
      display: flex;
      justify-content: center;
      color: rgb(67 166 245);
      font-size: 10rem;
      margin: 0;
    }
    h3 {
      display: flex;
      justify-content: center;
      color: rgb(67 166 245);
      font-size: 1rem;
      margin: 0;
    }
    .controls {
      display: flex;
      gap: 10px;
    }
    .main {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    button {
      background-color: rgb(67 166 245);
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }
  `;

  constructor() {
    super();
    this.disabled = false;

    const { count, phase, minCount, maxCount } = getState();
    this.count = count;
    this.phase = phase;
    this.minCount = minCount;
    this.maxCount = maxCount;
  }

  increase() {
    dispatch(actions[this.phase].increase());
    this.count = getState().count;
    this.phase = getState().phase;
  }

  decrease() {
    dispatch(actions[this.phase].decrease());
    this.count = getState().count;
    this.phase = getState().phase;
  }

  reset() {
    dispatch(actions[this.phase].reset());
    this.count = getState().count;
    this.phase = getState().phase;
  }

  currentPhase() {
    if (this.phase === 'atMin') {
      return 'Phase: At Minimum Count';
    } else if (this.phase === 'atMax') {
      return 'Phase: At Maximum Count';
    } else return 'Phase: Normal';
  }

  render() {
    console.log('----RENDER----');
    return html`
      <div class="main">
        <sl-button></sl-button>
        <div>
          <h1>${this.count}</h1>
          <h3>${this.currentPhase()}</h3>
          <div class="controls">
            <button .disabled=${this.disabled} @click=${this.decrease}>-</button>
            <button .disabled=${this.disabled} @click=${this.reset}>RESET</button>
            <button .disabled=${this.disabled} @click=${this.increase}>+</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('tally-counter', TallyCounter);

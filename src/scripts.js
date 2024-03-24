import { getState, dispatch, subscribe, states } from './model/store.js';
import { actions } from './model/actions.js';

const plusBtn = document.querySelector('[data-plus]');
const minusBtn = document.querySelector('[data-minus]');
const resetBtn = document.querySelector('[data-reset]');

export const MAX_COUNT = 5;
export const MIN_COUNT = -5;
let currentPhase = states[0].phase;

const setPhase = (currentCount) => {
  let phase;
  if (currentCount === MAX_COUNT) {
    phase = 'atMax';
  } else if (currentCount === MIN_COUNT) {
    phase = 'atMin';
  } else {
    phase = 'normal';
  }
  return phase;
};

subscribe((prev, next) => {
  next.phase = setPhase(next.count);
  console.log('Previous state:', prev, 'Current state:', next);
});

plusBtn.addEventListener('click', () => {
  dispatch(actions[currentPhase].increase());
});

minusBtn.addEventListener('click', () => {
  dispatch(actions[currentPhase].decrease());
});

resetBtn.addEventListener('click', () => {
  dispatch(actions[currentPhase].reset());
});

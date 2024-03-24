//@ts-check

// Actions that are sent to Reducer.js
export const increase = () => ({ type: 'INC_COUNT' });
export const decrease = () => ({ type: 'DEC_COUNT' });
export const reset = () => ({ type: 'RESET_COUNT' });

//Sets state phase according to the current state count
export const setPhase = ({ phase, count, minCount, maxCount }) => {
  if (count >= maxCount) {
    phase = 'atMax';
  } else if (count <= minCount) {
    phase = 'atMin';
  } else {
    phase = 'normal';
  }
  return phase;
};

// Throws error for invalid actions in current phase
const invalid = (action, phase) => () => {
  throw new Error(`Cannot "${action}" in current phase ("${phase}")`);
};

// Object contains all the valid actions that can be performed in the current phase
export const actions = {
  normal: {
    increase,
    decrease,
    reset,
  },
  atMax: {
    increase: invalid('increase', 'atMax'),
    decrease,
    reset,
  },
  atMin: {
    increase,
    decrease: invalid('decrease', 'atMin'),
    reset,
  },
};

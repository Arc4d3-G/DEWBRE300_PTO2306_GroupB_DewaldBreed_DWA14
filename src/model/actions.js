export const increase = () => ({ type: 'INC_COUNT' });

export const decrease = () => ({ type: 'DEC_COUNT' });

export const reset = () => ({ type: 'RESET_COUNT' });

const invalid = (action, phase) => () => {
  throw new Error(`Error: ${action} is not a valid action for current phase (${phase})`);
};

export const actions = {
  normal: {
    increase,
    decrease,
    reset,
  },
  atMax: {
    increase: invalid('increase', 'atMax'), // disable button
    decrease, // change phase back to normal
    reset, //change phase back to normal
  },
  atMin: {
    increase, //change phase back to normal
    decrease: invalid('increase', 'atMin'), // disable button
    reset, //change phase back to normal
  },
};

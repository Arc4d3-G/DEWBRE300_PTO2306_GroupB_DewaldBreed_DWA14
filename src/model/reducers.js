import { MAX_COUNT, MIN_COUNT } from '../scripts.js';

export const reducer = (state, action) => {
  if (action.type === 'INC_COUNT') {
    return {
      ...state,
      count: state.count + state.stepAmount,
    };
  } else if (action.type === 'DEC_COUNT') {
    return {
      ...state,
      count: state.count - state.stepAmount,
    };
  } else if (action.type === 'RESET_COUNT') {
    return {
      ...state,
      phase: 'normal',
      count: 0,
    };
  } else {
    return state;
  }
};

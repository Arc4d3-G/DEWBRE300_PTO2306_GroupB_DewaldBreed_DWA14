//@ts-check
import { reducer } from './reducers.js';

let subscribers = [];

export const states = [
  {
    phase: 'normal',
    count: 0,
    stepAmount: 1,
    maxCount: 5,
    minCount: -5,
  },
];

export const getState = () => {
  return { ...states[0] };
};

/**
 *
 * @param {function} action
 */
export const dispatch = (action) => {
  const prev = getState();
  const next = reducer(prev, action);

  subscribers.forEach((subscriber) => subscriber(prev, next));
  states.unshift(next);
};

export const subscribe = (subscription) => {
  subscribers.push(subscription);
  const handler = (item) => item !== subscription;

  const unsubscribe = () => {
    const newSubscribers = subscribers.filter(handler);
    subscribers = newSubscribers;
  };

  return unsubscribe;
};

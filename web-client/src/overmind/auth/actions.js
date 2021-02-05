export const inc = ({ state }) => state.counter.count++;

export const dec = ({ state }) => state.counter.count--;

export const reset = ({ state }) => (state.counter.count = 0);

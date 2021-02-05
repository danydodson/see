export const chart = {
  initial: "INIT_COUNTER",
  states: {
    INIT_COUNTER: {
      on: {
        reset: null,
        inc: "INCREMENT",
        dec: "DECREMENT",
      },
    },
    INCREMENT: {
      on: {
        reset: "INIT_COUNTER",
        inc: null,
        dec: "DECREMENT",
      },
    },
    DECREMENT: {
      on: {
        reset: "INIT_COUNTER",
        inc: "INCREMENT",
        dec: null,
      },
    },
  },
};

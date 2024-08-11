import { createStore } from "redux";

// Reducer
const INITIAL_VALUE = {
  counter: 0,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  const newStore = store;

  if (action.type === "INCREMENT") {
    return { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { counter: store.counter - 1 };
  }

  return newStore;
};

// Store
const counterStore = createStore(counterReducer);

export default counterStore;

// Actions are defined in Controls.jsx

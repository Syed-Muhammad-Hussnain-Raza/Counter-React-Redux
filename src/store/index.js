import { createStore } from "redux";

// Initial value for store
const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
  author: "Syed Muhammad Hussnain Raza",
};

// Reducer for store
const counterReducer = (store = INITIAL_VALUE, action) => {
  const newStore = store;

  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return {
      ...store,
      counter: store.counter + Number(action.payload.num),
    };
  } else if (action.type === "SUBSTRACT") {
    return {
      ...store,
      counter: store.counter - Number(action.payload.num),
    };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { ...store, privacy: !store.privacy };
  }

  return newStore;
};

// Store definition
const counterStore = createStore(counterReducer);

export default counterStore;

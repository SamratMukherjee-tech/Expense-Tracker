import React from "react";
import { createStore } from "redux";

const storeReducer = (state = { balance: 0 }, action) => {
  if (action.type === "income") {
    return { balance: state.balance + action.amount };
  }
  if (action.type === "expense") {
    return { balance: state.balance - action.amount };
  }
  return { balance: 0 };
};
const store = createStore(storeReducer);

export default store;

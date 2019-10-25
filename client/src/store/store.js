import { createStore } from "redux";

const initialState = {
  count: 3
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

const store = createStore(testReducer);

export default store;

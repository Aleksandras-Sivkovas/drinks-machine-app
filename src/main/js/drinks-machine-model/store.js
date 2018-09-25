import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk"
import promise from "redux-promise-middleware";
// import {logger} from "redux-logger";
import axios from "axios";

import reducer from "./reducers"

const middleware = applyMiddleware(
  promise(),
  thunk,
  // logger,
);

export const store = createStore(
  reducer,
  middleware
);

store.dispatch({
  type:"BILLS_FETCHING",
  payload: axios.get("/rest/drinks-machine-app-data/bills")
});
store.dispatch({
  type:"DRINKS_FETCHING",
  payload: axios.get("/rest/drinks-machine-app-data/drinks")
});

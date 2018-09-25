import { combineReducers } from "redux"
import reduceReducers from 'reduce-reducers';
import drinksMachine from "./drinksMachineReducer"
import bills from "./billsReducer"
import drinks from "./drinksReducer"

export default reduceReducers(
  drinksMachine,
  bills,
  drinks,
);

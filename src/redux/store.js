import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import valuesReducer from "./ducks/values";

import { composeWithDevTools } from "redux-devtools-extension";

const combinedReducers = combineReducers({
  valuesReducer,
});

const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

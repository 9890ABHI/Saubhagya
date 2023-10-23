import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer, productsReducer } from "./reducers";
const RootReducers = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));

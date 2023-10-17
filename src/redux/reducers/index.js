import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import authReducer from "./authReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  user: authReducer,
});

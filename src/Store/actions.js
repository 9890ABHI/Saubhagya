import { Clothingproducts } from "../constants";

// Action Types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

// Action Creators
export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, error });

export const signupRequest = () => ({ type: SIGNUP_REQUEST });
export const signupSuccess = (user) => ({ type: SIGNUP_SUCCESS, user });
export const signupFailure = (error) => ({ type: SIGNUP_FAILURE, error });

// Action Types
export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

// Action Creators
export const getProductsRequest = () => ({ type: GET_PRODUCTS_REQUEST });
export const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  products,
});
export const getProductsFailure = (error) => ({
  type: GET_PRODUCTS_FAILURE,
  error,
});

//

// import {
//   loginRequest,
//   loginSuccess,
//   loginFailure,
//   signupRequest,
//   signupSuccess,
//   signupFailure,
//   getProductsRequest,
//   getProductsSuccess,
//   getProductsFailure,
// } from "./actions";

// Thunk for logging in
export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    // Make API request for login here
    // Once successful, dispatch loginSuccess(user)
    dispatch(loginSuccess(credentials));
    // If there's an error, dispatch loginFailure(error)
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

// Thunk for signing up
export const signup = (userData) => async (dispatch) => {
  try {
    dispatch(signupRequest());
    // Make API request for signup here
    // Once successful, dispatch signupSuccess(user)
    dispatch(signupSuccess(userData));
    // If there's an error, dispatch signupFailure(error)
  } catch (error) {
    dispatch(signupFailure(error));
  }
};

// Thunk for getting all products
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch(getProductsRequest());
    // Make API request to fetch all products here
    // Once successful, dispatch getProductsSuccess(products)
    const preProducts = Clothingproducts;
    dispatch(getProductsSuccess(preProducts));
    // If there's an error, dispatch getProductsFailure(error)
  } catch (error) {
    dispatch(getProductsFailure(error));
  }
};

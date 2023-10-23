import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "./actions";

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return { ...state, user: action.user, isLoading: false, error: null };

    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return { ...state, user: null, isLoading: false, error: action.error };

    default:
      return state;
  }
};

const initialStateProduct = {
  products: [],
  error: null,
  isLoading: false,
};

export const productsReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        isLoading: false,
        error: null,
      };

    case GET_PRODUCTS_FAILURE:
      return { ...state, products: [], isLoading: false, error: action.error };

    default:
      return state;
  }
};

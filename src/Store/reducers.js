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
  LOGOUT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  // UPDATE_QUANTITY,
  INCREASE_CART_ITEM_VALUE,
  DECREASE_CART_ITEM_VALUE
} from "./actions";

const initialState = {
  user: null,
  error: null,
  isLoading: false,
  cart: [],
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

    // case ADD_TO_CART:
    //   return {
    //     ...state,
    //     cart: [...state.cart , action.product],
    //   };
    case ADD_TO_CART:
      const existingProduct = state.cart.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === existingProduct.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

      // case UPDATE_QUANTITY:
      //   return{
      //     ...state,
      //     cart:action.payload
      //   }

        case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case INCREASE_CART_ITEM_VALUE:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, quantity : item.quantity + 1 } : item
        ),
      };
      case DECREASE_CART_ITEM_VALUE:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, quantity : item.quantity - 1 } : item
        ),
      };
    // case REMOVE_FROM_CART:
    //   return {
    //     ...state,
    //     cart: state.cart.filter((product) => product.id !== action.productId),
    //   };

    case LOGOUT: // Handle the LOGOUT action
      return { ...state, user: null, error: null, isLoading: false };

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

import {
    FIND_PRODUCT_BY_ID_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS,
    GET_ALL_PRODUCT_FAILURE,
    GET_ALL_PRODUCT_REQUEST,
    GET_ALL_PRODUCT_SUCCESS,
  } from "./ActionType";
  
  const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
    deletedProduct:0
  };
  
  export const productReducer = (
    state = initialState,
    action: { type: string; payload: any }
  ) => {
    switch (action.type) {
      case GET_ALL_PRODUCT_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        return { ...state, loading: true, error: null };
  
      case GET_ALL_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          products: action.payload,
        };
  
      case FIND_PRODUCT_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          product: action.payload,
        };
  
      case GET_ALL_PRODUCT_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
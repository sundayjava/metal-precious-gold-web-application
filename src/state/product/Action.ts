import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store";
import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  GET_ALL_PRODUCT_FAILURE,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
} from "./ActionType";

export const getAllProduct = () => async (dispatch: AppDispatch) => {
  dispatch({ type: GET_ALL_PRODUCT_REQUEST });

  try {
    const { data } = await axios.get(`/api/product`);

    dispatch({ type: GET_ALL_PRODUCT_SUCCESS, payload: data});
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch({
        type: GET_ALL_PRODUCT_FAILURE,
        payload: (error as AxiosError).message,
      });
    } else {
      dispatch({
        type: GET_ALL_PRODUCT_FAILURE,
        payload: "An error occurred " + error,
      });
    }
  }
};

export const findProductsById =
  (id: string) => async (dispatch: AppDispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

    try {
      const { data } = await axios.get(`/api/product/${id}`);

      dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: FIND_PRODUCT_BY_ID_FAILURE,
          payload: (error as AxiosError).message,
        });
      } else {
        dispatch({
          type: FIND_PRODUCT_BY_ID_FAILURE,
          payload: "An error occurred " + error,
        });
      }
    }
  };

// export const findProducts = (reqData: any) => async (dispatch: AppDispatch) => {
//   dispatch({ type: FIND_PRODUCTS_REQUEST });
//   const {
//     parentcat,
//     product_weight,
//     childcategory,
//     selection,
//     minPrice,
//     maxPrice,
//     brand,
//   } = reqData;

//   try {
//     const { data } = await axios.get(
//       `/api/product/${parentcat}/?weight=${product_weight}&childcategory=${childcategory}&minPrice=${minPrice}&maxPrice=${maxPrice}`
//     );

//     console.log("Product: ", data);
//     dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       dispatch({
//         type: FIND_PRODUCTS_FAILURE,
//         payload: (error as AxiosError).message,
//       });
//     } else {
//       dispatch({
//         type: FIND_PRODUCTS_FAILURE,
//         payload: "An error occurred " + error,
//       });
//     }
//   }
// };

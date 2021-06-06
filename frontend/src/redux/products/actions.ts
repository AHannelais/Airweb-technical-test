import {
    FETCH_PRODUCTS,
    FETCH_PRODUCT,
    ProductThunkAction,
  } from "./types";
  import { server } from "../../utils/server";
  
  
export const fetchCategories = (): ProductThunkAction => async (dispatch) => {
    try {
      const response = await server.get(`/products`);
      dispatch({ type: FETCH_PRODUCTS, payload: response.data });
    } catch (err) {
      console.log(err.response);
    }
};
export const fetchProduct = (id: string): ProductThunkAction => async (dispatch) => {
    try {
        const response = await server.get(`/products/${id}`);
        dispatch({ type: FETCH_PRODUCT, payload: response.data });      
    } catch (err) {
        console.log(err.response);     
    } 
};

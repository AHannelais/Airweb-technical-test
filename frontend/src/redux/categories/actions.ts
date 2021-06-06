import {
    FETCH_CATEGORIES,
    FETCH_CATEGORY,
    CategoryThunkAction,
  } from "./types";
  import { server } from "../../utils/server";
  
  
export const fetchCategories = (): CategoryThunkAction => async (dispatch) => {
    try {
      const response = await server.get(`/categories`);
      dispatch({ type: FETCH_CATEGORIES, payload: response.data });
    } catch (err) {
      console.log(err.response);
    }
};
export const fetchCategory = (id: string): CategoryThunkAction => async (dispatch) => {
    try {
        const response = await server.get(`/categories/${id}`);
        dispatch({ type: FETCH_CATEGORY, payload: response.data });      
    } catch (err) {
        console.log(err.response);     
    } 
};

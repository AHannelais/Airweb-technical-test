import _ from "lodash";
import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  ProductState,
  ProductActions,
} from "./types";

const initiaState: ProductState = {};

export function productReducer(
  state = initiaState,
  action: ProductActions
) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_PRODUCTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
}

import _ from "lodash";
import {
  FETCH_CATEGORY,
  FETCH_CATEGORIES,
  CategoryState,
  CategoryActions,
} from "./types";

const initiaState: CategoryState = {};

export function categoryReducer(
  state = initiaState,
  action: CategoryActions
) {
  switch (action.type) {
    case FETCH_CATEGORY:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_CATEGORIES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
}

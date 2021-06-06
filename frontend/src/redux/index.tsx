import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ProductState} from './products/types'
import { productReducer }  from './products/reducer'
import { CategoryState } from './categories/types'
import { categoryReducer} from './categories/reducer'

export interface RootState {
  products: ProductState;
  categories : CategoryState;
}

export default createStore(
  combineReducers<RootState>({
    products: productReducer,
    categories : categoryReducer
  }),
  applyMiddleware(thunk)
);
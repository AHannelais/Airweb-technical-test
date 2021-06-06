import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";

export interface Product {
    // Identifiant unique du produit
    id: string;
    // Nom du produit à afficher
    label: string;
    // Description du produit
    description: string;
    // Prix en centimes (integer)
    price: number;
    // Identifiant de la catégorie parente
    category_id: string;
    // URL vers l'image miniature
    thumbnail_url: string | null;
  }
  



interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS;
  payload: Product[];
}
interface FetchProductAction {
  type: typeof FETCH_PRODUCT;
  payload: Product;
}
export interface ProductState {
  [id: string]: Product;
}
export type ProductActions = FetchProductsAction | FetchProductAction

export type ProductThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ProductState,
  unknown,
  Action<string>
>;
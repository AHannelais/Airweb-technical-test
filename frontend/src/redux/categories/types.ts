import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_CATEGORY = "FETCH_CATEGORY";

export interface Category {
    // Identifiant unique du produit
    id: string;
    // Index de la catégorie dans la boutique
    index: number;
    // Nom du produit à afficher
    label: string;
    // Description du produit
    description: string;
  }
  



interface FetchCategorysAction {
  type: typeof FETCH_CATEGORIES;
  payload: Category[];
}
interface FetchCategoryAction {
  type: typeof FETCH_CATEGORY;
  payload: Category;
}
export interface CategoryState {
  [id: string]: Category;
}
export type CategoryActions = FetchCategorysAction | FetchCategoryAction
export type CategoryThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  CategoryState,
  unknown,
  Action<string>
>;
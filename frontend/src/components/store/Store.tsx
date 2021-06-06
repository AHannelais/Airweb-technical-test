import React , { useEffect} from "react";
import {  useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/categories/actions"
import { fetchProducts} from "../../redux/products/actions"
import { ProductList } from "./ProductList"
import {Title, Layout } from "../ui"

export function Store() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
    dispatch(fetchCategories())
    // eslint-disable-next-line
  },[])
  
  return (
    <>
      <Title title="Store"/>
      <Layout>
        <ProductList/>
      </Layout>
    </>
  );
}

import React , { useEffect } from "react";
import { useCookies } from "react-cookie"
import { fetchProduct} from "../../redux/products/actions"
import {  useDispatch } from "react-redux";
import { ProductList } from "./ProductList"
import {Title, Layout } from "../ui"

export function Cart() {
  const dispatch = useDispatch()
  const [ cookies ] = useCookies(["cart"])
  useEffect(()=>{
    if (cookies["cart"]){
      for ( const productId of Object.keys(cookies["cart"])){
        dispatch(fetchProduct(productId))
      }
    }
      // eslint-disable-next-line
    },[])
    
    return (
        <>
          <Title title="My Cart"/>
          <Layout>
          <ProductList/>
          </Layout>  
        </>

    );
}
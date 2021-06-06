import React from "react";
import {  useSelector } from "react-redux";
import { RootState } from "../../redux"
import { ListItem , Typography , useMediaQuery } from "@material-ui/core"
import { useCookies } from "react-cookie"
import { AddToCart} from "./AddToCart"
import emptyImage from "../../images/doge-not-found.jpg"


export interface Props {
  productId : string
}
export function Product({ productId} : Props) {
  const [cookies] = useCookies(["cart"])
  const isPageWide = useMediaQuery('(min-width: 500px)')
  const product = useSelector((state: RootState) =>
    state.products[productId]
  );
  const category = useSelector((state: RootState) =>
    state.categories[product.category_id]
  );

  return (
   <ListItem>
      <img alt="" src={product.thumbnail_url || emptyImage} width="70px" height="70px" />
      <div style={{display : "flex", flexDirection : isPageWide ? "row" : "column"}}>
     <div style={{ margin : 10}}>
      <div style={{display : "flex", flexDirection :  isPageWide ? "row" : "column"}}>
      <Typography
        component="h3"
        variant="h5"
        align="center"
      >
        {product.label}
      </Typography>
      <p style={{margin : "auto 5px"}}>{category?.label}</p>
      </div>
     <div>
     {product.description}
     </div>
     </div>
     <div style={{display :  isPageWide ? "block":"flex", minWidth : "30%", textAlign : "center"}}>
     <Typography
        style={{margin : "auto"}}
        component="h3"
        variant="h5"
      >
        {product.price} Ɖ
      </Typography>
     <p  style={{margin : "auto"}}>{"In cart : " + (cookies["cart"] && cookies["cart"][productId] ? cookies["cart"][productId] : 0)}</p>
     <AddToCart productId={productId}/>
     </div>
     </div>
   </ListItem>
  );
}

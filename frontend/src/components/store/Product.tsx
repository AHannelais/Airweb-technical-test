import React from "react";
import {  useSelector } from "react-redux";
import { RootState } from "../../redux"
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from "@material-ui/core"
import { useCookies } from "react-cookie"
import { AddToCart} from "./AddToCart"


export interface Props {
  productId : string
}
export function Product({ productId} : Props) {
  const [cookies] = useCookies(["cart"])
  const product = useSelector((state: RootState) =>
    state.products[productId]
  );
  const category = useSelector((state: RootState) =>
    state.categories[product.category_id]
  );

  return (
   <ListItem>
     <ListItemAvatar>
          <Avatar alt={"none"} 
          //@ts-ignore
          src={product.thumbnail_url} />
        </ListItemAvatar>
        <ListItemText
          primary= { product.label}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={{display : "inline"}}
                color="textPrimary"
              >
                {"PRICE : " + product.price}
              </Typography>
              <p>{ "CATEGORY" + category?.label}</p>
              <p>{product.description}</p>
              <AddToCart productId={productId}/>
              <p>{"in cart : " + (cookies["cart"] && cookies["cart"][productId] ? cookies["cart"][productId] : 0)}</p>
            </React.Fragment>
          }
        />
   </ListItem>
  );
}

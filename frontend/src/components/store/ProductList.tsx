import React from "react";
import {  useSelector } from "react-redux";
import { RootState } from "../../redux"
import { Product } from "./Product"
import {List, makeStyles, createStyles, Theme, Divider } from "@material-ui/core"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin : "auto", 
    },
  }),
);

export function ProductList() {
  const classes = useStyles();
  
  const products = useSelector((state: RootState) => Object.values(state.products));

  return (
    <List className={classes.root}>
    {products.map((product, index) => 
    <div key={product.id}>
    <Product  productId={product.id}/>
    {index + 1 < products.length && <Divider variant="inset" component="li" />}
    </div>)}
    </List>
  );
}

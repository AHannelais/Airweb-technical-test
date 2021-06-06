import React from "react";
import {  useSelector } from "react-redux";
import { RootState } from "../../redux"
import { Product } from "./Product"
import {List, makeStyles, createStyles, Theme } from "@material-ui/core"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

export function ProductList() {
  const classes = useStyles();
  
  const products = useSelector((state: RootState) => Object.values(state.products));

  return (
    <List className={classes.root}>
    {products.map(product => <Product key={product.id} productId={product.id}/>)}
    </List>
  );
}

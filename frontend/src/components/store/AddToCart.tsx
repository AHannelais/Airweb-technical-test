import React  from "react";
import {  Button , useMediaQuery } from "@material-ui/core";
import { useCookies} from "react-cookie"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

interface Props {
    productId : string
}

export function AddToCart({ productId }: Props) {
  const [cookies, setCookies] = useCookies(["cart"])
  const isPageWide = useMediaQuery('(min-width: 500px)')
  const onClickAddToCart= async () => {
      const cart = cookies["cart"] as { [id  : string]: number} | undefined
      const newCart : { [id  : string]: number} = cart ?
      {...cart, [productId] : cart[productId] ? ++cart[productId] : 1 } :
      { [productId] : 1}
    setCookies("cart", newCart)
  };
  return (
          <Button
            style={{margin : `auto ${isPageWide ? "auto" : "10px"}`}}
            variant="contained"
            color="primary"
            onClick={onClickAddToCart }
          >
            {isPageWide ? "Add to Cart" : <AddShoppingCartIcon  fontSize="large"/>}
          </Button>
        );
}
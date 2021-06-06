import React  from "react";
import {  Button } from "@material-ui/core";
import { useCookies} from "react-cookie"


interface Props {
    productId : string
}

export function AddToCart({ productId }: Props) {
  const [cookies, setCookies] = useCookies(["cart"])
  const onClickAddToCart= async () => {
      const cart = cookies["cart"] as { [id  : string]: number} | undefined
      const newCart : { [id  : string]: number} = cart ?
      {...cart, [productId] : cart[productId] ? ++cart[productId] : 1 } :
      { [productId] : 1}
    setCookies("cart", newCart)
  };
  return (
          <Button
            variant="contained"
            color="primary"
            onClick={onClickAddToCart }
          >
            Add to Cart
          </Button>
        );
}
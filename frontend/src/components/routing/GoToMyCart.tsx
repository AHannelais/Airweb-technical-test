import React from "react";
import { Button, Badge} from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useCookies} from "react-cookie"
import { history } from "./history"
import _ from "lodash"

export function GoToMyCart() {
    const [cookies] = useCookies(["cart"])

    return (
        <Button variant="outlined"
        style={{margin : 5}}
        onClick={()=> history.push("/cart")}
        >
            My Cart
            <Badge
          color="default"
          badgeContent={cookies["cart"] ?  _.sum(Object.values(cookies["cart"])): 0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          max={99}
        >
          <ShoppingCartIcon  fontSize="large" />
        </Badge>
        </Button>
    )
}
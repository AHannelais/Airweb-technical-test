import React from "react";
import { useCookies } from "react-cookie"
import { useSelector } from "react-redux"
import { RootState } from "../../redux"
import { Product } from "../../redux/products/types"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    makeStyles,
    TableContainer,
    TableHead
} from "@material-ui/core";
import { ProceedToPayment } from "./ProceedToPayment";
import { BackToStore } from "../routing/BackToStore";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(2),
        marginTop: theme.spacing(4),
    },
    buttons : {
        display : "flex"
    }
}));

export interface sortedExtractions {
    [id: string]: number;
}
export function ProductList() {
  const [cookies ] = useCookies(["cart"])
  const classes = useStyles();
  const products = useSelector((state: RootState) => {
    if (!cookies["cart"] ) return []
    const result : Product[] =[]
    for (const productId of Object.keys(cookies["cart"]) ){
      if (state.products[productId])  result.push(state.products[productId])    
    }
    return result 
  });




    const createTable = () => {
        const table = []
        let totalPrice = 0
        for (const [productId, count] of Object.entries(cookies["cart"] as { [id : string] : number})) {
          const product = products.find(product => product.id === productId)
          totalPrice = totalPrice + (product?.price || 0) * count
            const row = <TableRow
                key={productId}
            >
                <TableCell align="center">
                    {product?.label}
                </TableCell>
                <TableCell align="center">
                    {count}
                </TableCell>
                <TableCell align="center">
                    {product?.price || 0}
                </TableCell>
            </TableRow>
            table.push(row)
        }
        table.unshift(<TableRow
            key={"total"}
        >
            <TableCell align="center">
                Total
            </TableCell>
            <TableCell align="center">
            </TableCell>
            <TableCell align="center">
                {totalPrice}
            </TableCell>
        </TableRow>)
        return table
    }
    if (!cookies["cart"] || !products){
      return <div style={{display : "flex"}}><p style={{margin : "auto"}}>your cart is empty</p><BackToStore/></div>
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.buttons}>
                <BackToStore/>
                <ProceedToPayment/>
            </div> 
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                               Product
                            </TableCell>
                            <TableCell>
                               Count
                            </TableCell>
                            <TableCell>
                               Price
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {createTable()}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}

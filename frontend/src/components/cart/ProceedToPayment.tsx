import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { PaymentDialog } from './PaymentDialog'
import { useCookies } from "react-cookie"
const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(2),
    marginLeft : theme.spacing(2),
  },
}));

export function ProceedToPayment() {
  const classes = useStyles();;
  const [isDisplayPayment, setDisplayPayment] = useState(false)
  // eslint-disable-next-line
  const [cookies, setCookie, RemoveCookie] = useCookies(["cart"])

  const onDisplayPayment = () => setDisplayPayment(true)
  const onHidePayment = () => setDisplayPayment(false)

  const handlePayment = () => {
    RemoveCookie("cart")
    onHidePayment()
  };

  return (
    <div>
      <PaymentDialog open={isDisplayPayment}
        hide={onHidePayment}
        handlePayment={handlePayment}
      />
      <Button
        className={classes.button}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={onDisplayPayment}
        color="primary"
        variant="contained"
      >
        Proceed to payment
      </Button>
    </div>
  );
}
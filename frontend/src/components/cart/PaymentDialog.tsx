import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import rich from "../../images/doge-rich.jpg"

export interface Props {
  open: boolean
  hide: () => void
  handlePayment: () => void
}

export function PaymentDialog({ open, hide, handlePayment }: Props) {

  return (

    <Dialog
      open={open}
      onClose={hide}
      onClick={(e) => e.stopPropagation()}
    >
      <DialogTitle id="alert-dialog-title">Thanks for your purchase</DialogTitle>
      <DialogContent>
        <DialogContentText>
            <img alt="Thanks" src={rich} style={{maxWidth : "100%", maxHeight : "100%"}}/>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handlePayment} 
        >
          OK
          </Button>
      </DialogActions>
    </Dialog>
  );
}
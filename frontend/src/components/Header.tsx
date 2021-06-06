import React from "react";
import { AppBar, Toolbar , Typography } from "@material-ui/core";
import { GoToMyCart } from "./cart/GoToMyCart";

export function Header() {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Typography variant="h6">
            DogeShop
        </Typography>
        <div
          style={{
            position: "absolute",
            right: "25px",
          }}
        >
          <div style={{ display: "flex" }}>
            <GoToMyCart/>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

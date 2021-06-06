import React from "react";
import { AppBar, Toolbar , Typography } from "@material-ui/core";
import { GoToMyCart } from "./routing/GoToMyCart";
import { history } from "./routing/history"
import doge from "../images/doge.png"

export function Header() {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
      <img
          style={{
            cursor: "pointer",
            maxHeight: "100px",
          }}
          onClick={() => {
            history.push("/");
          }}
          src={doge}
          alt=""
        />
        <Typography variant="h6"
         style={{
          cursor: "pointer",
        }}
        onClick={() => {
          history.push("/");
        }} >
            DogeShop
        </Typography>
        <div
          style={{
            position: "absolute",
            right: "25px",
          }}
        >
          <GoToMyCart/>
        </div>
      </Toolbar>
    </AppBar>
  );
}

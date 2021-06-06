import React from "react";
import { AppBar, Toolbar , Typography,   useMediaQuery } from "@material-ui/core";
import { GoToMyCart } from "./routing/GoToMyCart";
import { history } from "./routing/history"
//import { useMediaQuery } from "../utils/useMediaQuery"
import doge from "../images/doge.png"

export function Header() {
  const isPageWide = useMediaQuery('(min-width: 500px)')
    
  return (
    <AppBar position="fixed" color="default">
      <Toolbar style={{ display : "flex", flexDirection : isPageWide ? "row" : "column"}}>
      <div style={{display : "flex"}}>
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
          margin : "auto"
        }}
        onClick={() => {
          history.push("/");
        }} >
            DogeShop
        </Typography>
       </div>
        <div
          style={{
           position: isPageWide?  "absolute" : "relative",
            right: "25px",
          }}
        >
          <GoToMyCart/>
        </div>
      </Toolbar>
    </AppBar>
  );
}

import React from "react";
import { Button } from "@material-ui/core"
import { history } from "./history"

export function BackToStore() {

    return (
        <Button variant="outlined"
        onClick={()=> history.push("/")}
        >
            Back To Store
        </Button>
    )
}
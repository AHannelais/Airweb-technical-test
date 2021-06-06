import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    header: {
        color: "#ffffff",
        background: theme.palette.secondary.main,
        padding: "48px 24px",
        fontWeight: 600,
        borderRadius: "5px 5px 0 0"
    }
}));


interface Props {
    title: string
}
export function Title({ title }: Props) {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <Typography
                component="h1"
                variant="h4"
                align="center"
            >
                {title}
            </Typography>
        </div>

    );
}
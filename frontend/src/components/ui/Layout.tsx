import React, { ReactNode } from "react";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    layout: {
        width: "auto",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.up(1200 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            paddingBottom: theme.spacing(3),
        },
    },
}));

interface Props {
    children: ReactNode
}
export function Layout({ children }: Props) {

    const classes = useStyles();

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                {children}
            </Paper>
        </main>
    );
}
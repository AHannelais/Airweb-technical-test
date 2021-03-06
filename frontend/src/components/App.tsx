import React from "react";
import { Routes } from "./routing/Routes";
import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
  CssBaseline,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { Header } from "./Header";
import { Provider } from "react-redux";
import store from "../redux";

const useStyles = makeStyles((theme: Theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.grey.A200,
    },
  },
}));
function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const isPageWide = useMediaQuery('(min-width: 500px)')
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: { main: "#252b31" },
          secondary: { main: "#5e6668" },
          error: { main: "#d49c6b" },
          success: { main: "#2fd700" },
        },
      }),
    [prefersDarkMode]
  );
  const classes = useStyles(theme);
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline classes={classes}>
        <Header />
        <div style={{ marginTop: isPageWide ? "100px" : "150px" }}>
            <Routes />
          </div>
      </CssBaseline>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
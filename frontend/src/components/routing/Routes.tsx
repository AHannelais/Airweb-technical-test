import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./history";
import { Store} from "../store/Store"
import { Cart} from "../cart/Cart"
import { NoMatchRoute } from "./NoMatchRoute"

export function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Store} />
        <Route path="/cart" exact component={Cart} />
        <Route component={NoMatchRoute} />
      </Switch>
    </Router>
  );
}
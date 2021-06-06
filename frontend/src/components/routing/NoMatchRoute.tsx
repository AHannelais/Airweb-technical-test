import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/doge-not-found.jpg"


export function NoMatchRoute() {
  return (
    <div>
      <p>Oups you seem to be lost ...</p>
      <img alt="" src={notFound}/>
      <Link to="/">Go back to home page</Link>
    </div>
  );
}

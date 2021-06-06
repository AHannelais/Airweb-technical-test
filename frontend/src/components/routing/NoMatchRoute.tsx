import React from "react";
import { Link } from "react-router-dom";

export function NoMatchRoute() {
  return (
    <div>
      <p>Oups you seem to be lost ...</p>
      <Link to="/">Go back to home page</Link>
    </div>
  );
}

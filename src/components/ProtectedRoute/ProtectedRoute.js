import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...props }) {
  return(
    <Route>
      {
        () => props.loggedIn || JSON.parse(localStorage.getItem('loggedIn')) ? <Component {...props} /> : <Redirect to='/' />
      }
    </Route>

  );
}
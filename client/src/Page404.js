import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import NavBar from "./components/NavBar";

function Page404(props) {

  return (
    <Redirect to={{pathname: '/', state: {from: props.location}}} />
  );
}

export default Page404;
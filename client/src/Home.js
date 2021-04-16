import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import NavBar from "./components/NavBar";

function Home(props) {

  return <Redirect to={{pathname: '/gpt', state: {from: props.location}}} />

  return (
    <div className="h-screen">
      <div className="h-1/10">
        <NavBar />
      </div>
      <div className="h-screen">

      </div>
    </div>
  );
}

export default Home;
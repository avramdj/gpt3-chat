import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

function Home(props) {

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
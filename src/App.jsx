// @ts-nocheck
import React from "react";
import { useParams } from "react-router-dom";
import AsideNav from "./components/AsideNav/AsideNav";
import Results from "./components/Results/Results";

function App() {
  /** Assigns userId parameter from url to variable*/
  let params = useParams();

  return (
    <main className="main">
      <AsideNav />
      <Results id={params.userId} />
    </main>
  );
}

export default App;

import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getUserData } from "./services/dataManager";
import AsideNav from "./components/AsideNav/AsideNav";
import Results from "./components/Results/Results";

function App() {
  let params = useParams();

  return (
    <main className="main">
      <AsideNav />
      <Results id={params} />
    </main>
  );
}

export default App;

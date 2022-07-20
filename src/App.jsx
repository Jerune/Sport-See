import React, { useEffect } from "react";
import { getUserData } from "./services/dataManager";
import AsideNav from "./components/AsideNav/AsideNav";
import Results from "./components/Results/Results";

function App() {
  useEffect(() => {
    const refreshData = async () => {
      await getUserData();
    };
    refreshData();
  }, []);

  return (
    <main className="main">
      <AsideNav />
      <Results />
    </main>
  );
}

export default App;

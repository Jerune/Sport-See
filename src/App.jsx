import { StoreContext } from "./providers/StoreProvider";
import React, { useContext, useEffect } from "react";
import { getUserData } from "./services/dataManager";

function App() {
  const [store] = useContext(StoreContext);
  useEffect(() => {
    const refreshData = async () => {
      await getUserData();
    };
    refreshData();
  }, []);

  return <div></div>;
}

export default App;

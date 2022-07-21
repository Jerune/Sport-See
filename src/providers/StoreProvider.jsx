import React, { useState, createContext } from "react";
import defaultData from "../services/dataModel";
const StoreContext = createContext({});

let store = {
  /*  user: {},
  sessions: [],
  activity: [],
  kind: {},
  performance: [],
  */
};

function StoreProvider({ children }) {
  const [get, set] = useState(defaultData);
  // @ts-ignore
  store.get = get;
  store.set = (newValues) => {
    console.log(newValues);
    set({
      ...store.get,
      ...newValues,
    });
  };

  return (
    <StoreContext.Provider value={[get, set]}>{children}</StoreContext.Provider>
  );
}

export { StoreProvider, StoreContext, store };

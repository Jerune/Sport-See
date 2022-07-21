import React, { useState, createContext } from "react";
import defaultData from "../services/dataModel";
const StoreContext = createContext({});

let store = {};

function StoreProvider({ children }) {
  const [get, set] = useState(defaultData);
  // @ts-ignore
  store.get = get;
  store.set = (newValues) => {
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

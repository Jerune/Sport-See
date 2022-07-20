import React, { useState, createContext } from "react";
import defaultData from "../services/dataModel";
const StoreContext = createContext({});

let store = {
  user: {},
  sessions: [],
  activity: [],
  set: (data) => {},
};

function StoreProvider({ children }) {
  const [get, set] = useState(defaultData);
  store = get;
  store.set = set;

  return (
    <StoreContext.Provider value={[get, set]}>{children}</StoreContext.Provider>
  );
}

export { StoreProvider, StoreContext, store };

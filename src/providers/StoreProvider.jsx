// @ts-nocheck
import React, { useState, createContext } from "react";
import defaultData from "../services/dataModel";
const StoreContext = createContext({});

let store = {};
/**
 * Data Provider for all React Components
 *
 * @param   {HTMLElement} children  all child elements
 *
 * @return  {React.ReactElement}            StoreProvider Context
 */
function StoreProvider({ children }) {
  const [get, set] = useState(defaultData);
  // @ts-ignore
  /** Set Global Store variable to Context value and setter function */
  store.get = get;
  store.set = (newValues) => {
    /** Add new values to already existing store object */
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

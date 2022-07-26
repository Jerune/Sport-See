import { store } from "../providers/StoreProvider";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/mockData";

async function getAPIData(id) {
  let arrayID = "404";
  if (id === "12") {
    arrayID = "0";
  } else if (id === "18") {
    arrayID = "1";
  } else {
    console.log("Error : MockUser not found");
    store.set({ user: "error" });
  }

  const adjustedData = USER_PERFORMANCE[arrayID].data.map((activity) => {
    return { ...activity, kind: store.get.kind[activity.kind] };
  });

  /** Sets new values from API to global store object */
  store.set({
    user: USER_MAIN_DATA[arrayID],
    sessions: USER_AVERAGE_SESSIONS[arrayID].sessions,
    activity: USER_ACTIVITY[arrayID].sessions,
    performance: adjustedData,
  });
}

export { getAPIData };

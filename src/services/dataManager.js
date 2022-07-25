import { store } from "../providers/StoreProvider";

/**
 * Function that gets data from API and updates Global Store context with correct user data
 *
 * @async
 * @param   {string}  id    user ID
 * @param   {string}  type  type of element
 *
 * @return  {promise}        data array with user data
 */
async function getAPIData(id, type) {
  //** Returns correct API endpoint based on type of data  */
  let apiURI = "";
  switch (type) {
    case "user":
      apiURI = `https://calm-gorge-80201.herokuapp.com/user/${id}`;
      break;
    case "sessions":
      apiURI = `https://calm-gorge-80201.herokuapp.com/user/${id}/average-sessions`;
      break;
    case "activity":
      apiURI = `https://calm-gorge-80201.herokuapp.com/user/${id}/activity`;
      break;
    case "performance":
      apiURI = `https://calm-gorge-80201.herokuapp.com/user/${id}/performance`;
      break;
    default:
      apiURI = "";
  }
  /** Receives API Endpoint based on type */
  const response = await fetch(apiURI);
  if (response.status === 200) {
    const rawData = await response.json();
    let adjustedData = [];
    if (type === "performance") {
      /** Adjusts data from API to add kind of activity titles from data model */
      adjustedData = rawData.data.data.map((activity) => {
        return { ...activity, kind: store.get.kind[activity.kind] };
      });
    }
    /** Sets new values from API to global store object */
    store.set({
      [type]:
        type === "user"
          ? rawData.data
          : type === "performance"
          ? adjustedData.reverse()
          : rawData.data.sessions,
    });
  } else {
    console.log("Error when trying to get data:", response.status);
    /** Sets Store user to error in case data has not been found, will trigger 404 */
    store.set({ user: "error" });
  }
}

export { getAPIData };

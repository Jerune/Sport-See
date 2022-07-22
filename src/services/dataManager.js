import { store } from "../providers/StoreProvider";

async function getAPIData(id, type) {
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

  const response = await fetch(apiURI);
  if (response.status === 200) {
    const rawData = await response.json();
    let adjustedData = [];
    if (type === "performance") {
      adjustedData = rawData.data.data.map((activity) => {
        return { ...activity, kind: store.get.kind[activity.kind] };
      });
    }
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
    store.set({ user: "error" });
    console.log("Store has been set");
  }
}

export { getAPIData };

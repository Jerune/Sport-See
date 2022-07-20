import { store } from "../providers/StoreProvider";

async function getUserData() {
  const response = await fetch(
    "https://calm-gorge-80201.herokuapp.com/user/12"
  );
  const rawData = await response.json();
  store.set({ ...store, user: rawData.data });
}

async function getSessionsData() {
  const response = await fetch(
    "https://calm-gorge-80201.herokuapp.com/user/12/average-sessions"
  );
  const rawData = await response.json();
  store.set({ ...store, sessions: rawData.data.sessions });
}

async function getActivityData() {
  const response = await fetch(
    "https://calm-gorge-80201.herokuapp.com/user/12/activity"
  );
  const rawData = await response.json();
  store.set({ ...store, activity: rawData.data.sessions });
}

export { getUserData, getSessionsData, getActivityData };

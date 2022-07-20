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

async function getPerformanceData() {
  const response = await fetch(
    "https://calm-gorge-80201.herokuapp.com/user/12/performance"
  );
  const rawData = await response.json();
  const adjustedData = rawData.data.data.map((activity) => {
    return { ...activity, kind: store.kind[activity.kind] };
  });

  store.set({ ...store, performance: adjustedData });
}

export { getUserData, getSessionsData, getActivityData, getPerformanceData };

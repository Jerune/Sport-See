import { StoreContext } from "../../../providers/StoreProvider";
import React, { useContext, useEffect } from "react";
import { LineChart, Line } from "recharts";
import { getSessionsData } from "../../../services/dataManager";

export default function SessionDuration() {
  const [store] = useContext(StoreContext);
  useEffect(() => {
    const refreshData = async () => {
      await getSessionsData();
    };
    refreshData();
  }, []);

  return (
    <LineChart width={263} height={258} data={store.sessions}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
}

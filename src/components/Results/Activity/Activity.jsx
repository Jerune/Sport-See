import React, { useContext, useEffect } from "react";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { StoreContext } from "../../../providers/StoreProvider";
import { getActivityData } from "../../../services/dataManager";

export default function Activity() {
  // @ts-ignore
  const [store] = useContext(StoreContext);
  useEffect(() => {
    const refreshData = async () => {
      await getActivityData();
    };
    refreshData();
  }, []);

  return (
    <section className="activity">
      <BarChart
        width={835}
        height={320}
        data={store.activity}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#282D30" />
        <Bar dataKey="calories" fill="#E60000" />
      </BarChart>
    </section>
  );
}

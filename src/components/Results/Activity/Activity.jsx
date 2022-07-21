import React, { useContext, useEffect } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { StoreContext } from "../../../providers/StoreProvider";
import { getActivityData } from "../../../services/dataManager";

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <div>
        <p>{`${payload[0].value} kg`}</p>
        <p>{`${payload[1].value} kCal`}</p>
      </div>
    );
  }

  return null;
}

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
        barGap={8}
        barCategoryGap="35%"
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="day"
          dy={16}
          padding={{ left: -48, right: -48 }}
          tickLine={false}
          tick={{ fontSize: 14, fontWeight: 500 }}
        />
        <YAxis
          yAxisId="kg"
          dataKey="kilogram"
          domain={["dataMin - 1", "dataMax + 2"]}
          allowDecimals={false}
          dx={48}
          orientation="right"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          yAxisId="cal"
          dataKey="calories"
          domain={[0, "dataMax + 50"]}
          hide={true}
        />
        <Bar
          yAxisId="kg"
          dataKey="kilogram"
          maxBarSize={8}
          radius={[50, 50, 0, 0]}
          fill="#282D30"
        />
        <Bar
          yAxisId="cal"
          dataKey="calories"
          maxBarSize={8}
          radius={[50, 50, 0, 0]}
          fill="#E60000"
        />
        <Tooltip
          // @ts-ignore
          content={<CustomTooltip />}
          cursor={{
            fill: "rgba(0, 0, 0, 0.1)",
          }}
        />
      </BarChart>
    </section>
  );
}

// @ts-nocheck
import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { StoreContext } from "../../../providers/StoreProvider";

export default function Activity() {
  // @ts-ignore
  const [store] = useContext(StoreContext);

  function xAxisTickFormat(value) {
    return value.split("-")[2].split("0")[1];
  }

  function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className="activity_tooltip">
          <div>{`${payload[0].value}`}kg</div>
          <div>{`${payload[1].value}`}Kcal</div>
        </div>
      );
    }
    return null;
  }

  return (
    <section className="activity">
      <h2 className="activity_title">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={store.activity}
          width={820}
          height={280}
          margin={{
            top: 10,
            right: 5,
            left: 5,
            bottom: 10,
          }}
        >
          <CartesianGrid
            strokeDasharray="2"
            vertical={false}
            // horizontalPoints={[60, 75, 90]}
          />
          <XAxis
            className="activity_axis"
            dataKey="day"
            tickFormatter={xAxisTickFormat}
            interval="preserveStartEnd"
            tickSize={0}
            tickMargin={25}
            tick={{ fontSize: "14px" }}
            stroke="#9B9EAC"
          />
          <YAxis
            dataKey="calories"
            yAxisId="left"
            orientation="left"
            hide={true}
          />
          <YAxis
            className="activityYAxis"
            dataKey="kilogram"
            yAxisId="right"
            orientation="right"
            type="number"
            domain={["dataMin -1", "dataMax"]}
            tickCount={3}
            tickSize={0}
            tick={{ fontSize: "14px" }}
            axisLine={false}
            tickMargin={30}
            width={45}
            stroke="#9B9EAC"
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            align="right"
            height={90}
            iconType="circle"
            iconSize={8}
            formatter={(value) => (
              <span className="activity_legend">{value}</span>
            )}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            yAxisId="right"
            fill="#282D30"
            radius={[25, 25, 0, 0]}
            barSize={7}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            yAxisId="left"
            fill="#E60000"
            radius={[25, 25, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

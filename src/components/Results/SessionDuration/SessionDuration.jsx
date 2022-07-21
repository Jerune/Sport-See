import { StoreContext } from "../../../providers/StoreProvider";
import React, { useContext, useEffect } from "react";
import { LineChart, Line, XAxis, Tooltip } from "recharts";
import { getSessionsData } from "../../../services/dataManager";

export default function SessionDuration() {
  const [store] = useContext(StoreContext);
  useEffect(() => {
    const refreshData = async () => {
      await getSessionsData();
    };
    refreshData();
  }, []);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  const formatXAxis = (tickItem) => {
    switch (tickItem) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        return "";
    }
  };

  return (
    <section className="sessionDuration">
      <h2>Durée moyenne des sessions</h2>
      <LineChart data={store.sessions} width={263} height={175}>
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.6)"
          axisLine={false}
          dy={10}
          tickLine={false}
          tickFormatter={formatXAxis}
          padding={{ left: 20, right: 20 }}
        />
        <Line
          dataKey="sessionLength"
          type={"monotone"}
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: "#FFFFFF",
            strokeWidth: 5,
            r: 3,
          }}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: "rgba(0, 0, 0, 0.1)",
            strokeWidth: 32,
          }}
        />
      </LineChart>
    </section>
  );
}

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
      <LineChart width={263} height={175} data={store.sessions}>
        <XAxis
          axisLine={false}
          tickLine={false}
          padding={{ left: 20, right: 20 }}
          tickMargin={10}
          dataKey="day"
          stroke="#FFFFFF"
          tickFormatter={formatXAxis}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotoneX"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          strokeWidth={2}
          activeDot={{ r: 3 }}
        />
      </LineChart>
    </section>
  );
}

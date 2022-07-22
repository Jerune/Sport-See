// @ts-nocheck
import { StoreContext } from "../../../providers/StoreProvider";
import React, { useContext } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function SessionDuration() {
  const [store] = useContext(StoreContext);

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

  function formatXAxis(tickItem) {
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
  }

  const sessionElement = document.querySelector(".sessionDuration");

  function mouseMove(e) {
    if (e.isTooltipActive) {
      let windowWidth = sessionElement.offsetWidth;
      let mouseXpercent = Math.floor(
        (e.activeCoordinate.x / windowWidth) * 100
      );
      sessionElement.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercent}%, rgba(230,1,0,1) ${mouseXpercent}%`;
    }
  }

  function mouseOut() {
    sessionElement.style.background = "#FF0101";
  }

  return (
    <section className="sessionDuration">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={store.sessions}
          onMouseMove={mouseMove}
          onMouseOut={mouseOut}
        >
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            dy={15}
            tickLine={false}
            tickFormatter={formatXAxis}
            padding={{ left: 10, right: 10 }}
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
            // @ts-ignore
            content={<CustomTooltip />}
            cursor={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
